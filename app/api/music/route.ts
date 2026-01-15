import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-db';

export async function GET() {
  try {
    const music = await prisma.music.findMany({
      orderBy: {
        displayOrder: 'asc',
      },
    });
    return NextResponse.json(music);
  } catch (error) {
    console.error('Error fetching music:', error);
    return NextResponse.json(
      { error: 'Failed to fetch music' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, platform, url, releaseYear, coverUrl, displayOrder } = body;

    const music = await prisma.music.create({
      data: {
        title,
        platform,
        url,
        releaseYear,
        coverUrl,
        displayOrder: displayOrder || 0,
      },
    });

    return NextResponse.json(music, { status: 201 });
  } catch (error) {
    console.error('Error creating music:', error);
    return NextResponse.json(
      { error: 'Failed to create music' },
      { status: 500 }
    );
  }
}
