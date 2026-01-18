'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import UserMenu from './UserMenu';

export default function HeaderAuth() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <UserMenu />;
  }

  return (
    <Link className='cursor-pointer' href='/login'>
      <Button className='hidden md:inline-flex cursor-pointer'>Login</Button>
    </Link>
  );
}
