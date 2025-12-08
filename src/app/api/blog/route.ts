import connectDB from '../../../config/db';
import BlogPost from '../../../models/blogpost';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  await connectDB();

  const url = new URL(req.url);
  const isAdmin = url.searchParams.get("admin") === "true";

  const query = isAdmin ? {} : { published: true };

  const posts = await BlogPost.find(query).sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: posts });
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const newPost = await BlogPost.create(body);
    return NextResponse.json({ success: true, data: newPost }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}
