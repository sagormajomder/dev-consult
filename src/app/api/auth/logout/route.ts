import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json(
    { message: 'Logged out successfully' },
    { status: 200 },
  );

  response.cookies.delete('auth_token');
  response.cookies.delete('login_status');

  return response;
}
