"use client";

import React from 'react';

interface PostContentProps {
  post: {
    title: string;
    date: string;
    content: string;
    author: string;
    category: string;
    tags: string[];
  };
}

export default function PostContent({ post}: PostContentProps): React.ReactElement {
  return (
    <article className="bg-white p-8 mt-10">
      <h1 className="text-4xl font-extrabold text-center text-black mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 text-center mb-8 border-b pb-4">{post.date}</p>
      
      <div 
        className="prose lg:prose-lg max-w-none text-black" 
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
      <div className="mt-1 flex flex-wrap gap-2">
          {post.tags
            .map((t: string) => t.trim())
            .filter(Boolean)
            .slice(0, 5)
            .map((tag: string) => (
              <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                #{tag}
              </span>
            ))}
        </div>
      <p className="text-sm text-black justify-end mt-8 pb-4">{post.author}</p>
    </article>
  );
};
