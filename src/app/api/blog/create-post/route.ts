import connectDB from '../../../../config/db';
import BlogPost, { IBlogPost } from '../../../../models/blogpost';
import { NextRequest, NextResponse } from 'next/server';

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    await connectDB();
    const postData: Partial<IBlogPost> = await req.json();
    const newPost = await BlogPost.create(postData);

    return NextResponse.json(
      {
        success: true,
        message: 'Blog post created successfully',
        data: newPost,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 400 }
    );
  }
}
