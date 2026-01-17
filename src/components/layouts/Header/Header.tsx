import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Container from '../Container';
import Logo from '../Logo';
import MobileMenu from './MobileMenu';
import Navlinks from './Navlinks';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md py-4'>
      <Container>
        <nav className='flex justify-between items-center'>
          <Logo />
          <Navlinks className='hidden md:flex items-center gap-3.5' />
          <Link className='cursor-pointer' href='/login'>
            <Button className='hidden md:inline-flex cursor-pointer'>
              Login
            </Button>
          </Link>
          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
}
