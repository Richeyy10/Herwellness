import EventPostCard from "./eventpostcard";

interface EventData {
    _id: string; 
    title: string;
    location: string;
    date: string;
    image: string;
}



export default async function EventHome() {
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
    return (
        <>
            <div className="mt-20 mb-20 w-full">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Upcoming Events</h1>
                <div className="w-[80%] mx-auto grid md:grid-cols-3 gap-8">
                {events.map((event) => (
                        <EventPostCard
                            key={event._id}
                            title={event.title}
                            _id={event._id}
                            location={event.location}
                            image={event.image}
                            date={event.date}
                        />
                ))}
                </div>
            </div>
        </>
    )
}