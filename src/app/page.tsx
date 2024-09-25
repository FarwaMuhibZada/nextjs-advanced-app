import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <section className="bg-lightBlue text-navyBlue py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Tech Insights</h1>
          <p className="text-lg md:text-xl mb-6">
            Explore the latest insights, stories, and updates from our amazing community.
          </p>
          <Link href="/posts" className="inline-block px-6 py-3 bg-navyBlue text-white rounded-lg text-lg font-semibold hover:bg-lightBlue transition duration-200">
            View Blog Posts
          </Link>
        </div>
      </section>

      {/* Featured Posts Section with Next.js Image */}
      <section className="py-16 text-navyBlue">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Featured Posts</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white border rounded-lg shadow-lg overflow-hidden">
                {/* Use Next.js Image component */}
                <Image
                  src={`/images/past1.jpg`}
                  alt={`Post ${index + 1}`}
                  width={400}
                  height={250}
                  className="object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Post Title {index + 1}</h3>
                  <p className="text-gray-600 mb-4">A brief description of the post goes here.</p>
                  <Link href={`/posts/${index + 1}`} className="text-blue-600 hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-200 bg-lightBlue text-navyBlue">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">Sign up to get the latest posts and updates directly to your inbox.</p>
          <Link href="/signup" className="inline-block px-6 py-3 bg-navyBlue text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}
