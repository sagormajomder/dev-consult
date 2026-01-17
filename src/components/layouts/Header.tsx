import { Button } from '../ui/button';
import Container from './Container';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import Navlinks from './Navlinks';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md py-4'>
      <Container>
        <nav className='flex justify-between items-center'>
          <Logo />
          <Navlinks className='hidden md:flex items-center gap-3.5' />
          <Button className='hidden md:inline-flex'>Login</Button>
          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
}
