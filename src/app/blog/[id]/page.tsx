import Footer from '@/src/components/footer';
import Navbar from '@/src/components/navbar';
import PostContent from '@/src/components/blog/postcontent';
import { notFound } from 'next/navigation';

interface BlogPost {
    title: string;
    date: string;
    author: string;
    content: string;
    category: string;
    tags: string[];
}

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { id } = await params;

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/blog/${id}`, {
        cache: 'no-store'
    });

    if (!response.ok) {
        if (response.status === 404) {
            notFound(); 
        }
        return <div className="p-20 text-center">Error fetching blog post: {response.statusText}</div>;
    }

    const result = await response.json();
    const postData = result.data;

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
    }).format(new Date(postData.createdAt));

    const formattedPost: BlogPost = {
        title: postData.title,
        date: formattedDate,
        content: postData.content,
        author: postData.author,
        category: postData.category,
        tags: postData.tags || [],
    };

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mt-20 mb-20 mx-auto px-4 sm:px-6 lg:px-8">
                <PostContent post={formattedPost} />
            </div>
            <Footer />
        </>
    );
}