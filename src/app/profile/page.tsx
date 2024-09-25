// src/app/profile/page.tsx
'use client'; // Mark the component as a Client Component

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// Fetching user data using hooks
const fetchUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: 'no-store', // Adjust cache strategy as needed
  });
  return res.json();
};

export default function Profile() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
      setLoading(false);
    };

    getUsers();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-5xl font-bold mb-12 text-center text-navyBlue">User Profiles</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2"
          >
            <Link href={`/profile/${user.id}`} className="flex flex-col items-center p-6 hover:bg-gray-100 transition duration-200">
              {/* Placeholder image for each user */}
              <div className="relative mb-4">
                <Image
                  src={`https://via.placeholder.com/150?text=${user.name}`} // Replace with actual user image if available
                  alt={`${user.name}'s profile picture`} // Escaped single quote removed
                  width={96} // Set width for Image component
                  height={96} // Set height for Image component
                  className="rounded-full border-4 border-lightBlue object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-navyBlue mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-1">{user.email}</p>
              <p className="text-gray-700">Phone: <span className="font-semibold text-gray-900">{user.phone}</span></p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
