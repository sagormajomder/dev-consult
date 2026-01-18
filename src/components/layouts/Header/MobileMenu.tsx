'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Container from '../Container';
import Navlinks from './Navlinks';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (res.ok) {
        logout();
        toast.success('Logged out successfully');
        setIsMenuOpen(false);
      }
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <>
      <div className='items-center gap-4 flex md:hidden'>
        {!isLoggedIn ? (
          <Link className='w-full inline-block cursor-pointer' href='/login'>
            <Button className='hidden sm:inline-flex md:hidden cursor-pointer'>
              Login
            </Button>
          </Link>
        ) : null}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden p-2 cursor-pointer'
          aria-label='Toggle menu'>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 right-0 md:hidden bg-background border-b shadow-lg z-40'>
          <Container>
            <div className='py-6 flex flex-col gap-4'>
              {isLoggedIn && (
                <div className='flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-800'>
                  <div className='relative h-10 w-10 overflow-hidden rounded-full border border-slate-200 dark:border-slate-700'>
                    <Image
                      src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100&q=80'
                      alt='User Profile'
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-cover h-full w-full'
                    />
                  </div>
                  <div>
                    <p className='text-sm font-bold text-slate-900 dark:text-white'>
                      Guest User
                    </p>
                    <p className='text-xs text-slate-500'>user@example.com</p>
                  </div>
                </div>
              )}
              <Navlinks className='flex flex-col gap-4 text-lg font-medium' />
              <div className={`mt-2 ${!isLoggedIn ? 'sm:hidden' : ''}`}>
                {isLoggedIn ? (
                  <Button
                    onClick={handleLogout}
                    className='w-full text-lg py-6 cursor-pointer'
                    variant='destructive'>
                    Sign Out
                  </Button>
                ) : (
                  <Link className='w-full cursor-pointer' href='/login'>
                    <Button className='w-full text-lg py-6 cursor-pointer'>
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
