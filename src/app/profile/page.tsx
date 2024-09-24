// src/app/profile/page.tsx
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// Fetching user data directly in the component
const fetchUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: 'no-store', // Adjust cache strategy as needed
  });
  return res.json();
};

export default async function Profile() {
  const users: User[] = await fetchUsers();

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">User Profiles</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="bg-gray-50 border border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-300">
              <Link href={`/profile/${user.id}`} className="flex justify-between items-center p-4 hover:bg-gray-100">
                <span className="text-lg font-semibold text-blue-600">{user.name}</span>
                <span className="text-gray-600">{user.email}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
