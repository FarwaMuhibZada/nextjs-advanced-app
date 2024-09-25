// src/app/posts/[id]/page.tsx

interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  const fetchPost = async (id: string | string[]) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
      cache: 'no-store', // Ensure fresh data on each request
    });
    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }
    return res.json();
  };
  
  export default async function PostPage({ params }: { params: { id: string } }) {
    const post: Post = await fetchPost(params.id);
  
    return (
      <div className="max-w-4xl mx-auto py-10 px-6 bg-white rounded-lg shadow-lg mt-10">
        <div className="bg-gradient-to-r from-lightBlue to-navyBlue p-6 rounded-lg mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-4">{post.title}</h1>
        </div>
        
        <p className="text-lg text-gray-700 leading-relaxed tracking-wide mb-8">
          {post.body}
        </p>
        
        <div className="flex justify-end">
          <a href="/posts" className="text-lightBlue font-semibold hover:text-navyBlue transition duration-300">
            Back to Posts
          </a>
        </div>
      </div>
    );
  }
  