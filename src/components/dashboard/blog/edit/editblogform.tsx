'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface BlogData {
  _id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  published: boolean;
}

export default function EditBlogForm({ initialBlog, id }: { initialBlog: BlogData; id: string }) {
  const router = useRouter();
  const [blog, setBlog] = useState<BlogData>(initialBlog);
  const [tagsInput, setTagsInput] = useState(initialBlog.tags.join(", "));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTagsInput(initialBlog.tags.join(", "));
  }, [initialBlog.tags]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;

    if (target.name === 'published') {
      if (target instanceof HTMLInputElement) {
        setBlog(prev => ({ ...prev, published: target.checked }));
      }
    } else if (target.name === 'tags') {
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        const tagsArray = target.value.split(',').map(t => t.trim()).filter(Boolean);
        setBlog(prev => ({ ...prev, tags: tagsArray }));
      }
    } else {
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) {
        setBlog(prev => ({ ...prev, [target.name]: target.value }));
      }
    }
  };


  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const updatedBlog = { ...blog, tags: tagsInput.split(",").map(t => t.trim()).filter(Boolean) };

    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBlog),
      });

      if (!res.ok) throw new Error('Failed to update blog');

      alert('Blog updated successfully!');
      router.push('/dashboard/blogs/list');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-10 ml-25 md:ml-70 mt-40 w-[80%] mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Edit Blog: {blog.title}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            name="title"
            value={blog.title}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleInputChange}
            rows={8}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
          <input
            value={tagsInput}
            onChange={handleTagsChange}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            placeholder="tag1, tag2, tag3"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="published"
            checked={blog.published}
            onChange={handleInputChange}
            className="w-4 h-4 text-blue-600 rounded"
          />
          <label className="text-sm font-medium text-gray-700">Publish</label>
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        >
          {saving ? 'Saving Changes...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
