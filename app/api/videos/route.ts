import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-db';

// GET all videos
export async function GET() {
  try {
    const videos = await prisma.videos.findMany({
      orderBy: {
        display_order: 'asc',
      },
    });
    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    );
  }
}

// POST create new video
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, url, platform, description, category, featured, display_order } = body;

    const video = await prisma.videos.create({
      data: {
        title,
        url,
        platform,
        description,
        category: category || null,
        featured: featured || false,
        display_order: display_order || 0,
      },
    });

    return NextResponse.json(video, { status: 201 });
  } catch (error) {
    console.error('Error creating video:', error);
    return NextResponse.json(
      { error: 'Failed to create video' },
      { status: 500 }
    );
  }
}
