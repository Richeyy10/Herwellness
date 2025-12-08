'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface EventData {
    _id: string;
    title: string;
    description: string;
    location: string;
    startTime: string | Date;
    endTime: string | Date;
    isOnline: boolean;
    attendeesCount: number;
    published: boolean;
}

export default function EventListPage() {
    const [events, setEvents] = useState<EventData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchEvents();
    }, []);

    async function fetchEvents() {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/event?admin=true");
            if (!res.ok) throw new Error(`Failed to fetch events (${res.status})`);
            const result = await res.json();
            setEvents(result.data || []);
        } catch (err: any) {
            setError(err.message || 'Unknown error');
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(_id: string) {
        if (!confirm('Are you sure you want to delete this event?')) return;
        setDeletingId(_id);
        try {
            const res = await fetch(`/api/event/${_id}`, { method: 'DELETE' });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || `Delete failed (${res.status})`);
            }
            setEvents(prev => prev.filter(e => e._id !== _id));
        } catch (err: any) {
            alert(err.message || 'Failed to delete');
        } finally {
            setDeletingId(null);
        }
    }

    function formatDate(iso?: string | Date) {
        if (!iso) return '-';
        try {
            if (iso instanceof Date) return iso.toLocaleString();
            return new Date(iso).toLocaleString();
        } catch {
            return String(iso);
        }
    }


    return (
        <div className="p-6 mt-40 ml-25 md:ml-70 w-[80%] mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold">All Events</h1>
                </div>
                <Link
                    href="/dashboard/events/create"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    New Event
                </Link>
            </div>

            <div className="bg-white shadow rounded divide-y">
                <div className="p-4 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        {loading ? 'Loading...' : `${events.length} event(s)`}
                        {error ? <span className="text-red-500 ml-4">Error: {error}</span> : null}
                    </div>
                    <button
                        onClick={fetchEvents}
                        className="text-sm text-gray-600 hover:text-gray-800"
                        disabled={loading}
                    >
                        Refresh
                    </button>
                </div>

                <div>
                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Loading events…</div>
                    ) : events.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            No events yet. Create one with the "New Event" button.
                        </div>
                    ) : (
                        events.map(event => (
                            <div key={event._id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-lg font-medium truncate">{event.title}</h2>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${event.published
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                                }`}
                                        >
                                            {event.published ? "Published" : "Draft"}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 truncate mt-1">Location: {event.location || '—'}</p>
                                    <p className="text-xs text-gray-400 mt-1">Starts: {formatDate(event.startTime)}</p>
                                </div>

                                <div className="flex items-center gap-2 ml-4">
                                    <Link
                                        href={`/dashboard/events/edit/${event._id}`}
                                        className="text-sm px-3 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(event._id)}
                                        disabled={deletingId === event._id}
                                        className="text-sm px-3 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50 disabled:opacity-50"
                                    >
                                        {deletingId === event._id ? 'Deleting...' : 'Delete'}
                                    </button>
                                    <Link
                                        href={`/events/${event._id}`}
                                        className="text-sm px-3 py-1 border rounded text-gray-700 border-gray-200 hover:bg-gray-50"
                                    >
                                        View
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
