import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const press = await prisma.press.findUnique({
      where: { id: parseInt(id) },
    });

    if (!press) {
      return NextResponse.json(
        { error: 'Press not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(press);
  } catch (error) {
    console.error('Error fetching press:', error);
    return NextResponse.json(
      { error: 'Failed to fetch press' },
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

    const press = await prisma.press.update({
      where: { id: parseInt(id) },
      data: {
        ...body,
        published_at: body.published_at ? new Date(body.published_at) : null,
      },
    });

    return NextResponse.json(press);
  } catch (error) {
    console.error('Error updating press:', error);
    return NextResponse.json(
      { error: 'Failed to update press' },
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
    await prisma.press.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting press:', error);
    return NextResponse.json(
      { error: 'Failed to delete press' },
      { status: 500 }
    );
  }
}
