import BlogPostCard from "./blogpostcard";

interface PostData {
    _id: string;
    title: string;
    author: string;
    category: string;
    createdAt: string;
    excerpt: string;
    published: boolean;
}


export default async function BlogHome() {
    const fetchPosts = async (): Promise<PostData[]> => {
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const url = `${baseUrl}/api/blog`;
        
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

    const posts: PostData[] = await fetchPosts();
    return (
        <>
            <div className="mt-20 mb-20 w-full">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Latest Blog Posts</h1>
                <div className="w-[80%] mx-auto grid md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogPostCard
                            key={post._id}
                            title={post.title}
                            createdAt={post.createdAt}
                            _id={post._id}
                            author={post.author}
                            category={post.category}
                            published={post.published}
                        />
                    ))}
            </div>
            </div>
        </>
    )
}