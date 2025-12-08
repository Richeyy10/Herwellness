import Link from "next/link";
import EventPostCard from "./event/eventpostcard";

interface EventData {
    _id: string;
    title: string;
    location: string;
    date: string;
    image: string;
}

export async function Event() {
    const fetchEvents = async (): Promise<EventData[]> => {
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const url = `${baseUrl}/api/event`;

        const response = await fetch(url, {
            cache: 'no-store'
        });

        if (!response.ok) {
            console.error(`Failed to fetch posts: ${response.statusText}`);
            return [];
        }

        const result = await response.json();
        return result.data || [];
    };

    const events: EventData[] = await fetchEvents();
    const numberOfEventsToShow = 4;
    return (
        <>
            <h2 className="text-3xl text-center mt-8 sm:text-4xl font-extrabold tracking-tight">
                Upcoming Events
            </h2>
            <div className="w-full h-full mx-auto flex gap-6 overflow-x-auto py-6 px-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {events.slice(0, numberOfEventsToShow).map((event) => (
                    <div className="group relative flex-shrink-0 snap-start h-full w-[300px] md:w-[400px] rounded-2xl p-5 transition-shadow duration-300">
                        <EventPostCard
                            key={event._id}
                            title={event.title}
                            _id={event._id}
                            location={event.location}
                            image={event.image}
                            date={event.date}
                        />
                    </div>
                ))}
            </div>
            <div className="text-center mb-10">
                <Link href="/events">
                    <button className="px-8 py-3 inline-flex items-center gap-2 bg-[#6A1B9A] hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors">
                        View More
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
            </div>
        </>
    )
};