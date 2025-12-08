import Link from 'next/link';
import React from 'react';

interface EventProps {
  title: string;
  location: string;
  image: string;
  date: string;
  _id: string; 
}

export default function EventPostCard({ title, location, image, date, _id }: EventProps): React.ReactElement {
  return (
      <article className="bg-white shadow-lg rounded-lg p-6 mb-8 transform transition duration-500 hover:scale-[1.02]">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-3xl font-semibold mb-2 text-black">
        <Link href={`/events/${_id}`} className="hover:text-[#6A1B9A]">
          {title}
        </Link>
      </h2>
      <p className="text-md text-black mb-4">{location}</p>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <Link href={`/events/${_id}`}>
        <button className="px-8 py-3 mt-4 bg-[#6A1B9A] hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors">
          Read more &rarr;
        </button>
      </Link>

    </article>
  );
};
