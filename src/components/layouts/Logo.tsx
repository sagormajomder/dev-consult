import { Code } from 'lucide-react';
import Link from 'next/link';

export default function Logo({
  className = '',
}: Readonly<{ className?: string }>) {
  return (
    <Link className='flex items-center gap-1' href={'/'}>
      <span className='inline-block py-1 px-1.5 bg-primary rounded-lg'>
        <Code className='text-background' />
      </span>
      <span className={`font-bold text-xl ${className}`}>DevConsult</span>
    </Link>
  );
}
