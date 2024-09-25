import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`);
    const profile = await res.json();

    return NextResponse.json(profile);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching profile data:', error);

    return NextResponse.json({ message: 'Error fetching profile data' }, { status: 500 });
  }
}
