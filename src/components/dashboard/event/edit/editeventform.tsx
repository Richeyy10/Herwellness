'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


interface EventData {
    _id: string;
    title: string;
    description: string;
    image: string | File;
    location: string;
    startTime: string | Date;
    endTime: string | Date;
    isOnline: boolean;
    attendeesCount: number;
    published: boolean;
}

export default function EditEventForm({ initialEvent, id }: { initialEvent: EventData; id: string }) {
    const router = useRouter();
    const [event, setEvent] = useState<EventData>(initialEvent);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(
        typeof event.image === "string" ? event.image : null
    );


    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const target = e.target;

        if (target.name === 'published') {
            if (target instanceof HTMLInputElement) {
                setEvent(prev => ({ ...prev, published: target.checked }));
            }
        } else {
            if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) {
                setEvent(prev => ({ ...prev, [target.name]: target.value }));
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("title", event.title);
            formData.append("description", event.description);
            formData.append("location", event.location);
            formData.append("startTime", new Date(event.startTime).toISOString());
            formData.append("endTime", new Date(event.endTime).toISOString());
            formData.append("published", String(event.published));

            if (imageFile) formData.append("image", imageFile);

            const response = await fetch(`/api/event/${id}`, {
                method: "PUT",
                body: formData,
            });

            if (!response.ok) throw new Error("Failed to update event");

            alert("Event updated successfully!");
            router.push("/dashboard/events/list");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };


    return (
        <div className="p-10 ml-25 md:ml-70 mt-40 w-[80%] mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Edit Event: {event.title}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        name="title"
                        value={event.title}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded p-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={event.description}
                        onChange={handleInputChange}
                        rows={10}
                        className="mt-1 block w-full border border-gray-300 rounded p-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <textarea
                        name="location"
                        value={event.location}
                        onChange={handleInputChange}
                        rows={1}
                        className="mt-1 block w-full border border-gray-300 rounded p-2"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Start Date & Time</label>
                        <input
                            name="startTime"
                            type="datetime-local"
                            value={
                                event.startTime
                                    ? new Date(event.startTime).toISOString().slice(0, 16)
                                    : ""
                            }
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">End Date & Time</label>
                        <input
                            name="endTime"
                            type="datetime-local"
                            min={
                                event.startTime
                                    ? new Date(event.startTime).toISOString().slice(0, 16)
                                    : undefined
                            }
                            value={
                                event.endTime
                                    ? new Date(event.endTime).toISOString().slice(0, 16)
                                    : ""
                            }
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file && file.type.startsWith("image/")) {
                                setImageFile(file);
                                const url = URL.createObjectURL(file);
                                setPreviewUrl(url);
                            }
                        }}
                        className="mt-1 block w-full border border-gray-300 rounded p-2"
                    />
                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt="preview"
                            className="mt-2 w-48 h-32 object-cover rounded"
                        />
                    )}
                </div>

                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="published"
                        checked={event.published}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 rounded"
                    />
                    <label className="text-sm font-medium text-gray-700">Publish</label>
                </div>

                {error && <div className="text-sm text-red-600">{error}</div>}

                <button type="submit" disabled={saving} className="bg-blue-600 text-white p-2 rounded disabled:opacity-50">
                    {saving ? 'Saving Changes...' : 'Save Changes'}
                </button>
            </form>
        </div>
    );
}