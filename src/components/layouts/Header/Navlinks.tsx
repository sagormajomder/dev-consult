import Menulink from './Menulink';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navlinks({
  className = '',
  children,
}: Readonly<{ className: string; children?: React.ReactNode }>) {
  return (
    <ul className={className}>
      {navItems.map(item => (
        <li key={item.href}>
          <Menulink href={item.href}>{item.label}</Menulink>
        </li>
      ))}
      {children}
    </ul>
  );
}
