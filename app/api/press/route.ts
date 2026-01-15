import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-db';

export async function GET() {
  try {
    const press = await prisma.press.findMany({
      orderBy: {
        displayOrder: 'asc',
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
    const { title, source, url, imageUrl, excerpt, publishedAt, displayOrder } = body;

    const press = await prisma.press.create({
      data: {
        title,
        source,
        url,
        imageUrl,
        excerpt,
        publishedAt: publishedAt ? new Date(publishedAt) : null,
        displayOrder: displayOrder || 0,
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
