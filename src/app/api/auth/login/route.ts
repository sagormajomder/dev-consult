import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Mock credentials
    if (email === 'user@example.com' && password === 'password') {
      const response = NextResponse.json(
        { message: 'Login successful' },
        { status: 200 },
      );

      // Set a mock auth cookie
      response.cookies.set('auth_token', 'mock_token_123', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });

      // Set a client-readable status cookie
      response.cookies.set('login_status', 'true', {
        httpOnly: false, // Visible to client
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
