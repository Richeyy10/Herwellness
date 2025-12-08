import Link from 'next/link';
import React from 'react';

interface Blog {
    _id: string 
    title: string
    author: string
    category: string
    published: boolean
    createdAt: string
}

export default function BlogPostCard({ title, _id, author, category, published, createdAt }: Blog): React.ReactElement {
  const formatDisplayDate = (isoString: string): string => {
    try {
      const date = new Date(isoString); 
      
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);

    } catch (error) {
      console.error("Error formatting date:", error);
      return isoString;
    }
  };

  const formattedDate = formatDisplayDate(createdAt);

  return (
    <article className="bg-white shadow-lg rounded-lg p-6 mb-8 transform transition duration-500 hover:scale-[1.02]">
      <h2 className="text-3xl font-semibold mb-2 text-black">
        <Link href={`/blog/${_id}`} className="hover:text-[#6A1B9A]">
          {title}
        </Link>
      </h2>
      
      <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
      
      <p className="text-gray-600 mb-4">{author}</p>
      <Link href={`/blog/${_id}`}>
        <button className="px-8 py-3 mt-4 bg-[#6A1B9A] hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors">
          Read more &rarr;
        </button>
      </Link>
    </article>
  );
};
