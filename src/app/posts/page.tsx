import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

// Fetching the posts directly in the component
const fetchPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    cache: 'no-store',
  });
  return res.json();
};

export default async function BlogPosts() {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-5xl font-bold mb-12 text-center text-navyBlue">Latest Blog Posts</h1>
      
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <li key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/posts/${post.id}`} className="block">
              <div className="relative">
                <img
                  src={`https://via.placeholder.com/400x250?text=Post+${post.id}`}
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-0 left-0 bg-lightBlue text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                  New
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-navyBlue hover:underline">{post.title}</h2>
                <p className="mt-2 text-gray-700">{post.body.slice(0, 150)}...</p>
              </div>
            </Link>
            <div className="bg-gray-100 p-4">
              <Link href={`/posts/${post.id}`} className="text-lightBlue font-semibold hover:text-navyBlue transition-colors duration-300">
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
