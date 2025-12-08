"use client";
import React, { useEffect, useState, useRef } from "react";

type Event = {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  startTime: string;
  endTime: string;
  published: boolean;
  createdAt: string;
  isOnline: boolean;
  attendeesCount: number;
};

export default function CreateEventPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("/api/event");
        if (!res.ok) throw new Error("Failed to fetch events");
        const result = await res.json();

        const eventsData = result.data.map((e: any) => ({
          id: e._id,
          title: e.title,
          description: e.description,
          location: e.location,
          image: e.image || "",
          startTime: e.startTime,
          endTime: e.endTime,
          published: e.published,
          createdAt: e.createdAt,
          isOnline: e.isOnline,
          attendeesCount: e.attendeesCount,
        }));

        setEvents(
          (eventsData as Event[]).sort(
            (a: Event, b: Event) =>
              +new Date(b.createdAt) - +new Date(a.createdAt)
          )
        );
      } catch (err: any) {
        console.error("Error loading events:", err);
        setError("Failed to load events");
      }
    }
    loadEvents();
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setImage(null);
      setPreviewUrl(null);
      if (file) alert("Please select a valid image file.");
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setImage(null);
    setPreviewUrl(null);
    setPublished(false);
    setError(null);

    if (imageInputRef.current) {
    imageInputRef.current.value = "";
  }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !location.trim()) {
      setError("Title and location are required.");
      return;
    }

    setSaving(true);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("description", description.trim());
      formData.append("location", location.trim());
      formData.append("startTime", startDate.trim());
      formData.append("endTime", endDate.trim());
      formData.append("published", String(published));
      if (image) formData.append("image", image);

      const res = await fetch("/api/event", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const result = await res.json();
        const savedEvent: Event = {
          id: result.data._id,
          title: result.data.title,
          description: result.data.description,
          location: result.data.location,
          image: result.data.image || "",
          startTime: result.data.startTime,
          endTime: result.data.endTime,
          published: result.data.published,
          createdAt: result.data.createdAt,
          isOnline: result.data.isOnline,
          attendeesCount: result.data.attendeesCount,
        };
        setEvents((prev) => [savedEvent, ...prev]);
        resetForm();
        alert("Event created successfully!");
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Failed to create event");
      }
    } catch (err: any) {
      console.error("Error submitting form:", err);
      setError("Network error or failed to connect to API.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="ml-25 md:ml-100 mt-40 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create Event</h1>
          <p className="text-gray-600 mt-2">Add a new event to your calendar</p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter event title"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={endDate}
                    min={startDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter event location"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Describe your event..."
                />
              </div>

              <div>
                <label
                  htmlFor="cover-image"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Cover Image
                </label>
                <input
                  id="cover-image"
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                {image && (
                  <p className="mt-2 text-sm text-green-600">
                    ✓ Selected: {image.name}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label
                  htmlFor="published"
                  className="text-sm font-medium text-gray-700"
                >
                  Publish immediately
                </label>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-60 transition"
                >
                  {saving ? "Creating..." : "Create Event"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                >
                  Reset
                </button>
              </div>
            </form>
          </section>

          <aside className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Preview</h2>
            <div className="border rounded-lg overflow-hidden">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="preview"
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                  No image
                </div>
              )}
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-gray-900">
                  {title || "Untitled Event"}
                </h3>
                <p className="text-sm text-gray-600">{location || "Location TBA"}</p>
                {startDate && (
                  <p className="text-sm text-gray-500">
                    Starts: {new Date(startDate).toLocaleString()}
                  </p>
                )}

                {endDate && (
                  <p className="text-sm text-gray-500">
                    Ends: {new Date(endDate).toLocaleString()}
                  </p>
                )}
                {description && (
                  <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
                )}
              </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Recent Events</h2>
            <div className="space-y-3 max-h-96 overflow-auto">
              {events.length === 0 ? (
                <p className="text-sm text-gray-500">No events yet</p>
              ) : (
                events.map((event) => (
                  <div key={event.id} className="border rounded-lg p-3 hover:shadow-md transition">
                    <div className="flex gap-3">
                      {event.image && (
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-12 h-12 rounded object-cover flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-gray-900 truncate">{event.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{event.location}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-400">
                            {new Date(event.createdAt).toLocaleDateString()}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded font-medium ${event.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                            {event.published ? "Published" : "Draft"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
