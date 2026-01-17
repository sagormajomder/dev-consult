'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import Container from './Container';
import NavLinks from './Navlinks';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='flex items-center gap-4'>
        <Button className='hidden sm:inline-flex md:hidden'>Login</Button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden p-2'
          aria-label='Toggle menu'>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 right-0 md:hidden bg-background border-b shadow-lg z-40'>
          <Container>
            <div className='py-6 flex flex-col gap-4'>
              <NavLinks className='flex flex-col gap-4 text-lg font-medium' />
              <div className='sm:hidden mt-2'>
                <Button className='w-full text-lg py-6'>Login</Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
