'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface Blog {
    _id: string
    title: string
    excerpt?: string
    published?: boolean
    createdAt?: string
}

export default function BlogListPage() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [deletingId, setDeletingId] = useState<string | null>(null) 
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchBlogs()
    }, [])

    async function fetchBlogs() {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch("/api/blog?admin=true");
            if (!res.ok) throw new Error(`Failed to fetch (${res.status})`)
            const result = await res.json()
            setBlogs(result.data || []) 
        } catch (err: any) {
            setError(err.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    async function handleDelete(_id: string) {
        if (!confirm('Are you sure you want to delete this blog?')) return
        setDeletingId(_id)
        try {
            const res = await fetch(`/api/blog/${_id}`, { method: 'DELETE' })
            if (!res.ok) {
                const text = await res.text()
                throw new Error(text || `Delete failed (${res.status})`)
            }
            setBlogs(prev => prev.filter(b => b._id !== _id)) 
        } catch (err: any) {
            alert(err.message || 'Failed to delete')
        } finally {
            setDeletingId(null)
        }
    }

    function formatDate(iso?: string) {
        if (!iso) return '-'
        try {
            return new Date(iso).toLocaleString()
        } catch {
            return iso
        }
    }
    

    return (
        <div className="p-6 mt-40 ml-25 md:ml-70 w-[80%] mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold">All Blogs</h1>
                </div>
                <Link
                    href="/dashboard/blogs/create" 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    New Blog
                </Link>
            </div>
            
            <div className="bg-white shadow rounded divide-y">
                <div className="p-4 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        {loading ? 'Loading...' : `${blogs.length} blog(s)`}
                        {error ? <span className="text-red-500 ml-4">Error: {error}</span> : null}
                    </div>
                    <button
                        onClick={fetchBlogs}
                        className="text-sm text-gray-600 hover:text-gray-800"
                        disabled={loading}
                    >
                        Refresh
                    </button>
                </div>

                <div>
                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Loading blogs…</div>
                    ) : blogs.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            No blogs yet. Create one with the "New Blog" button.
                        </div>
                    ) : (
                        blogs.map(blog => (
                            <div key={blog._id} className="p-4 flex items-center justify-between hover:bg-gray-50"> 
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-lg font-medium truncate">{blog.title}</h2>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                blog.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}
                                        >
                                            {blog.published ? 'Published' : 'Draft'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 truncate mt-1">{blog.excerpt || '—'}</p>
                                    <p className="text-xs text-gray-400 mt-1">Created: {formatDate(blog.createdAt)}</p>
                                </div>

                                <div className="flex items-center gap-2 ml-4">
                                    <Link
                                        href={`/dashboard/blogs/edit/${blog._id}`} 
                                        className="text-sm px-3 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(blog._id)} 
                                        disabled={deletingId === blog._id}
                                        className="text-sm px-3 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50 disabled:opacity-50"
                                    >
                                        {deletingId === blog._id ? 'Deleting...' : 'Delete'}
                                    </button>
                                    <Link
                                        href={`/blog/${blog._id}`} 
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
    )
}
