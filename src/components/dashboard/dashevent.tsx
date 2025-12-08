import EventPostCard from "../event/eventpostcard";

interface EventData {
    _id: string;
    title: string;
    location: string;
    date: string;
    image: string;
}

export default async function DashEvent() {
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
    const numberOfEventsToShow = 3;
    return (
        <>
            <div className="mt-40 mb-10 px-4 md:px-8 w-full text-center overflow-x-hidden">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-10 pl-[20%] text-center">Events</h1>
                <div className="max-w-6xl pl-[120px] md:pl-[25%] mx-auto grid md:grid-cols-3 gap-8">
                    {events.slice(0, numberOfEventsToShow).map((event) => (
                        <EventPostCard
                            key={event._id}
                            title={event.title}
                            location={event.location}
                            image={event.image}
                            date={event.date}
                            _id={event._id}
                        />
                    ))}
                </div>
                <div className="text-center">
                    <button className="px-8 py-3 ml-[20%] bg-[#6A1B9A] hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors">
                        All Events
                    </button>
                </div>
            </div>
        </>
    )
}