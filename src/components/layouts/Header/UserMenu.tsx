'use client';

import { useAuth } from '@/context/AuthContext';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const { logout } = useAuth();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (res.ok) {
        logout(); // Update global state
        toast.success('Logged out successfully');
        router.push('/');
      } else {
        toast.error('Failed to logout');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='relative' ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='relative h-10 w-10 overflow-hidden rounded-full border border-slate-200 transition-all hover:ring-2 hover:ring-[#135bec] hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-[#135bec] focus:ring-offset-2 dark:border-slate-700'>
        <Image
          src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100&q=80'
          alt='User Profile'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover'
        />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 origin-top-right rounded-lg border border-slate-200 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all dark:border-slate-700 dark:bg-slate-800'>
          <div className='px-4 py-2 border-b border-slate-100 dark:border-slate-700'>
            <p className='text-sm font-bold text-slate-900 dark:text-white'>
              Guest User
            </p>
            <p className='text-xs text-slate-500 truncate'>guest@example.com</p>
          </div>
          <button
            onClick={handleLogout}
            className='flex w-full items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors text-left'>
            <LogOut className='w-4 h-4' />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
