// src/app/posts/[id]/page.tsx
import { useEffect, useState } from 'react';

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
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
    </div>
  );
}
