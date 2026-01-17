'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Container from '../Container';
import Navlinks from './Navlinks';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='items-center gap-4 flex md:hidden'>
        <Link className='w-full inline-block cursor-pointer' href='/login'>
          <Button className='hidden sm:inline-flex md:hidden cursor-pointer'>
            Login
          </Button>
        </Link>

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
              <Navlinks className='flex flex-col gap-4 text-lg font-medium' />
              <div className='sm:hidden mt-2'>
                <Link className='w-full cursor-pointer' href='/login'>
                  <Button className='w-full text-lg py-6 cursor-pointer'>
                    Login{' '}
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
