import BlogPostCard from "../blog/blogpostcard";

interface PostData {
    _id: string;
    title: string;
    author: string;
    category: string;
    createdAt: string;
    excerpt: string;
    published: boolean;
}

export default async function DashBlog() {
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
    const numberOfBlogsToShow = 3;
  return (
    <div className="mt-40 mb-10 px-4 md:px-8 w-full overflow-x-hidden">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 ml-[20%] text-center">
        Blogs
      </h1>

      <div className="max-w-6xl pl-[120px] md:pl-[25%] mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {posts.slice(0, numberOfBlogsToShow).map((post) => (
          <BlogPostCard
            key={post._id}
            title={post.title}
            author={post.author}
            _id={post._id}
            category={post.category}
            published={post.published}
            createdAt={post.createdAt}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="px-8 py-3 bg-[#6A1B9A] ml-[20%] hover:bg-[#C2185B] text-white font-semibold rounded-3xl transition-colors">
          All Blogs
        </button>
      </div>
    </div>
  );
}
