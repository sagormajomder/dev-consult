'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menulink({
  href,
  children,
}: Readonly<{ href: string; children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${pathname === href ? 'text-primary' : ' '}`}>
      {children}
    </Link>
  );
}
