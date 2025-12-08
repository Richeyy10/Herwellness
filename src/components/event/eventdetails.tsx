"use client";

import React from 'react';

interface EventDetailsProps {
    event: {
        _id: string;
        title: string;
        description: string;
        location: string;
        startTime: string;
        endTime: string;
        image: string;
    }
};

export default function EventDetails({ event }: EventDetailsProps): React.ReactElement {
    return (
        <article className="bg-white p-8 mt-10">
            <h1 className="text-4xl font-extrabold text-center text-black mb-4">{event.title}</h1>
            <img src={event.image} alt={event.title} className="w-full h-full object-cover rounded-md mb-4" />
            <p className="text-md text-black text-justify pb-4">{event.description}</p>
            <p className="text-sm text-gray-500 text-center mb-8 border-b pb-4">{event.startTime} to {event.endTime}</p>

            <div
                className="prose lg:prose-lg text-center max-w-none text-black"
                dangerouslySetInnerHTML={{ __html: event.location }}
            />
        </article>
    );
};