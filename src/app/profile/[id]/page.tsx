// src/app/profile/[id]/page.tsx

'use client'; // Mark this component as a Client Component

import { useParams } from 'next/navigation';
import Link from 'next/link';

interface User {
  name: string;
  email: string;
  phone: string;
}

// Function to fetch user data
const fetchUser = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);
  if (!res.ok) {
    throw new Error('User not found');
  }
  return res.json();
};

export default async function UserProfile() {
  const { id } = useParams(); // Get the dynamic id from the URL
  const user: User = await fetchUser(id as string); // Fetch user data

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">{user.name}'s Profile</h1>
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <span className="text-lg font-semibold">Email:</span>
            <span className="text-lg text-gray-700">{user.email}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <span className="text-lg font-semibold">Phone:</span>
            <span className="text-lg text-gray-700">{user.phone}</span>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/profile" className="text-blue-600 hover:underline">
            &larr; Back to User List
          </Link>
        </div>
      </div>
    </div>
  );
}
