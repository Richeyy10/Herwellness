import connectDB from '@/src/config/db';
import BlogPost from '@/src/models/blogpost';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  await connectDB();

  const pathnameParts = request.nextUrl.pathname.split('/');
  const postId = pathnameParts[pathnameParts.length - 1];

  if (!postId || postId === 'undefined') {
    return NextResponse.json({ success: false, message: 'Invalid or missing ID provided' }, { status: 400 });
  }

  const post = await BlogPost.findById(postId);

  if (!post) {
    return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: post });
}

export async function PUT(request: NextRequest) {
  await connectDB();

  const pathnameParts = request.nextUrl.pathname.split('/');
  const postId = pathnameParts[pathnameParts.length - 1];

  if (!postId || postId === 'undefined') {
    return NextResponse.json({ success: false, message: 'Invalid or missing ID provided' }, { status: 400 });
  }

  const body = await request.json();

  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(postId, body, {
      new: true,
      runValidators: true
    });

    if (!updatedPost) {
      return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: updatedPost });

  } catch (error: any) {
    console.error("Mongoose PUT Error:", error.message);

    if (error.name === 'ValidationError') {
      return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: false, message: 'Internal Server Error during update' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  await connectDB();
  const pathnameParts = request.nextUrl.pathname.split('/');
  const postId = pathnameParts[pathnameParts.length - 1];

  if (!postId || postId === 'undefined') {
    return NextResponse.json({ success: false, message: 'Invalid or missing ID provided' }, { status: 400 });
  }

  try {
    const deletedPost = await BlogPost.findByIdAndDelete(postId);

    if (!deletedPost) {
      return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Post deleted successfully' }, { status: 200 });

  } catch (error: any) {
    console.error("Mongoose DELETE Error:", error.message);

    if (error.name === 'CastError') {
      return NextResponse.json({ success: false, message: 'Invalid ID format' }, { status: 400 });
    }

    return NextResponse.json({ success: false, message: 'Internal Server Error during deletion' }, { status: 500 });
  }
}

