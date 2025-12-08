import EventDetails from '@/src/components/event/eventdetails';
import Footer from '@/src/components/footer';
import Navbar from '@/src/components/navbar';
import { notFound } from 'next/navigation';

interface EventData {
    _id: string;
    title: string;
    description: string;
    location: string;
    startTime: string;
    endTime: string;
    image: string;
}

interface EventDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EventDetailsPage({ params }: EventDetailsPageProps) {
    const { id } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/api/event/${id}`, {
        cache: 'no-store'
    });

    if (!response.ok) {
        if (response.status === 404) {
            notFound();
        }
        return <div className="p-20 text-center">Error fetching events data: {response.statusText}</div>;
    }

    const result = await response.json();
    const eventData = result.data;

    const formattedStart = new Intl.DateTimeFormat('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
    }).format(new Date(eventData.startTime));

    const formattedEnd = new Intl.DateTimeFormat('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
    }).format(new Date(eventData.endTime));

    const formattedEvent: EventData = {
        _id: eventData._id,
        title: eventData.title,
        description: eventData.description,
        startTime: formattedStart,
        endTime: formattedEnd,
        location: eventData.location,
        image: eventData.image,
    };

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mt-20 mb-20 mx-auto px-4 sm:px-6 lg:px-8">
                <EventDetails event={formattedEvent} />
            </div>
            <Footer />
        </>
    );
}