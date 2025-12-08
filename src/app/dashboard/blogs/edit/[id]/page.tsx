import React from 'react';
import EditBlogForm from '@/src/components/dashboard/blog/edit/editblogform';

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/blog/${id}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    return <div className="p-10 text-red-500">Error loading blog post</div>;
  }

  const result = await response.json();
  const blog = result.data;

  return <EditBlogForm initialBlog={blog} id={id} />;
}