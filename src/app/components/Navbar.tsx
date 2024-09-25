'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navyBlue shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-2xl font-semibold">
          Tech Insights
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:bg-lightBlue px-3 py-2 rounded-md text-lg">
              Home
            </Link>
            <Link href="/posts" className="text-white hover:bg-lightBlue px-3 py-2 rounded-md text-lg">
              Blog
            </Link>
            <Link href="/profile" className="text-white hover:bg-lightBlue px-3 py-2 rounded-md text-lg">
              Profile
            </Link>
            <Link href="/about" className="text-white hover:bg-lightBlue px-3 py-2 rounded-md text-lg">
              About
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? '✖️' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <Link href="/" className="block px-4 py-2 text-white hover:bg-blue-700">
            Home
          </Link>
          <Link href="/posts" className="block px-4 py-2 text-white hover:bg-blue-700">
            Blog
          </Link>
          <Link href="/profile" className="block px-4 py-2 text-white hover:bg-blue-700">
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
}
