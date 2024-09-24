import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

// Fetching the posts directly in the component
const fetchPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    cache: 'no-store', // This can be adjusted based on your caching strategy
  });
  return res.json();
};

export default async function BlogPosts() {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Blog Posts</h1>
      <ul className="space-y-8">
        {posts.map((post: Post) => (
          <li key={post.id} className="border rounded-lg shadow-md overflow-hidden">
            <Link href={`/posts/${post.id}`} className="block p-6 bg-white hover:bg-gray-100 transition">
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
              <p className="mt-2 text-gray-700">{post.body.slice(0, 150)}...</p>
            </Link>
            <div className="bg-gray-100 p-4">
              <Link href={`/posts/${post.id}`} className="text-blue-500 font-semibold">Read More</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
