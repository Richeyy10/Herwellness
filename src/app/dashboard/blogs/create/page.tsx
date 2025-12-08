"use client";
import React, { useEffect, useState } from "react";

type Blog = {
    _id: string;
    title: string;
    author: string;
    content: string;
    category: string;
    tags: string[];
    published: boolean;
    createdAt: string;
};

export default function CreateBlogPage() {
    const [title, setTitle] = useState("");
    const [authorInput, setAuthorInput] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [tagsInput, setTagsInput] = useState("");
    const [published, setPublished] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [posts, setPosts] = useState<Blog[]>([]);

    useEffect(() => {
        async function loadPosts() {
            try {
                const res = await fetch("/api/blog");
                if (!res.ok) throw new Error("API unavailable or failed to fetch");
                const result = await res.json();
                setPosts(result.data.sort((a: Blog, b: Blog) => +new Date(b.createdAt) - +new Date(a.createdAt)));
            } catch (err: any) {
                console.error(err);
            }
        }
        loadPosts();
    }, []);

    const resetForm = () => {
        setTitle("");
        setAuthorInput("");
        setContent("");
        setCategory("");
        setTagsInput("");
        setPublished(false);
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!title.trim() || !content.trim()) {
            setError("Title and content are required.");
            return;
        }

        const postPayload = {
            title: title.trim(),
            content: content.trim(),
            author: authorInput.trim() || 'Admin',
            category: category.trim(),
            tags: tagsInput
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean),
            published,
        };

        setSaving(true);


        try {
            const res = await fetch("/api/blog", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(postPayload),
            });

            if (res.ok) {
                const result = await res.json();
                const savedPost: Blog = result.data;
                setPosts((s) => [savedPost, ...s]);
                resetForm();
            } else {
                const errorData = await res.json();
                setError(errorData.message || 'Failed to save post to database.');
            }
        } catch (err: any) {
            console.error(err);
            setError("Network error or failed to connect to API.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="ml-25 md:ml-100 mt-40 min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Create Blog</h1>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <section className="lg:col-span-2 bg-white p-6 rounded shadow">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Blog Title</label>
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="mt-1 block w-full border-1 border-black rounded p-2"
                                    placeholder="Blog title"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Content</label>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    rows={5}
                                    className="mt-1 block w-full border-1 border-black rounded p-2 font-mono"
                                    placeholder="Write the content of the article..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Author</label>
                                <input
                                    value={authorInput}
                                    onChange={(e) => setAuthorInput(e.target.value)}
                                    className="mt-1 block w-full border-1 border-black rounded p-2"
                                    placeholder="Author of the blog"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="mt-1 block w-full border-1 border-black rounded p-2"
                                >
                                    <option value="" disabled>Select category</option>
                                    <option value="Menstrual Health">Menstrual Health</option>
                                    <option value="Reproductive Health">Reproductive Health</option>
                                    <option value="Wellness & Mental Health">Wellness & Mental Health</option>
                                    <option value="Community Stories">Community Stories</option>
                                    <option value="Advocacy">Advocacy</option>
                                </select>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
                                    <input
                                        value={tagsInput}
                                        onChange={(e) => setTagsInput(e.target.value)}
                                        className="mt-1 block w-full border-1 border-black rounded p-2"
                                        placeholder="education, health"
                                    />
                                </div>
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

                            {error && <div className="text-sm text-red-600">{error}</div>}

                            <div className="flex items-center gap-3">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
                                    disabled={saving}
                                >
                                    {saving ? "Saving..." : "Create Post"}
                                </button>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-3 py-2 border rounded text-sm text-gray-700 hover:bg-gray-50"
                                >
                                    Reset
                                </button>
                                <div className="text-sm text-gray-500 ml-auto">
                                    Live preview updates as you type
                                </div>
                            </div>
                        </form>
                    </section>

                    <aside className="bg-white p-6 rounded shadow space-y-6">
                        <div>
                            <h2 className="text-lg font-medium text-gray-800">Live Preview</h2>
                            <div className="mt-3 border rounded overflow-hidden">
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{title || "Untitled post"}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{authorInput || (content ? content.slice(0, 120) + (content.length > 120 ? "…" : "") : "No Author")}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {tagsInput
                                            .split(",")
                                            .map((t) => t.trim())
                                            .filter(Boolean)
                                            .slice(0, 5)
                                            .map((tag) => (
                                                <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                                    #{tag}
                                                </span>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-gray-800">Existing Posts</h2>
                            <div className="mt-3 space-y-3 max-h-72 overflow-auto">
                                {posts.length === 0 && <div className="text-sm text-gray-500">No posts yet.</div>}
                                {posts.map((p) => (
                                    <article key={p._id} className="border rounded p-3 hover:shadow">
                                        <div className="flex items-start gap-3">
                                            <div className="flex-1">
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm font-medium">{p.title}</h3>
                                                    <span className={`text-xs px-2 py-0.5 rounded ${p.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                                                        {p.published ? "Published" : "Draft"}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">{p.author || p.content.slice(0, 80)}</p>
                                                <div className="text-xs text-gray-400 mt-1">{new Date(p.createdAt).toLocaleString()}</div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    );
}