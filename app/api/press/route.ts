import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-db';

export async function GET() {
  try {
    const press = await prisma.press.findMany({
      orderBy: {
        display_order: 'asc',
      },
    });
    return NextResponse.json(press);
  } catch (error) {
    console.error('Error fetching press:', error);
    return NextResponse.json(
      { error: 'Failed to fetch press' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, source, url, image_url, excerpt, published_at, display_order } = body;

    const press = await prisma.press.create({
      data: {
        title,
        source,
        url,
        image_url,
        excerpt,
        published_at: published_at ? new Date(published_at) : null,
        display_order: display_order || 0,
      },
    });

    return NextResponse.json(press, { status: 201 });
  } catch (error) {
    console.error('Error creating press:', error);
    return NextResponse.json(
      { error: 'Failed to create press' },
      { status: 500 }
    );
  }
}
