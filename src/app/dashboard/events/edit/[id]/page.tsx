import React from 'react';
import EditEventForm from '@/src/components/dashboard/event/edit/editeventform';

interface EditEventPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditEventPage({ params }: EditEventPageProps) {
  const { id } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/event/${id}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    return <div className="p-10 text-red-500">Error loading blog post</div>;
  }

  const result = await response.json();
  const event = result.data;

  return <EditEventForm initialEvent={event} id={id} />;
}