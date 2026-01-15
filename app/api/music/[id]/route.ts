import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const music = await prisma.music.findUnique({
      where: { id: parseInt(id) },
    });

    if (!music) {
      return NextResponse.json(
        { error: 'Music not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(music);
  } catch (error) {
    console.error('Error fetching music:', error);
    return NextResponse.json(
      { error: 'Failed to fetch music' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const music = await prisma.music.update({
      where: { id: parseInt(id) },
      data: body,
    });

    return NextResponse.json(music);
  } catch (error) {
    console.error('Error updating music:', error);
    return NextResponse.json(
      { error: 'Failed to update music' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.music.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting music:', error);
    return NextResponse.json(
      { error: 'Failed to delete music' },
      { status: 500 }
    );
  }
}
