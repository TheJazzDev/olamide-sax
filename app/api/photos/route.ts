import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-db';

export async function GET() {
  try {
    const photos = await prisma.photo.findMany({
      orderBy: {
        displayOrder: 'asc',
      },
    });
    return NextResponse.json(photos);
  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, url, alt, category, featured, displayOrder } = body;

    const photo = await prisma.photo.create({
      data: {
        title,
        url,
        alt,
        category,
        featured: featured || false,
        displayOrder: displayOrder || 0,
      },
    });

    return NextResponse.json(photo, { status: 201 });
  } catch (error) {
    console.error('Error creating photo:', error);
    return NextResponse.json(
      { error: 'Failed to create photo' },
      { status: 500 }
    );
  }
}
