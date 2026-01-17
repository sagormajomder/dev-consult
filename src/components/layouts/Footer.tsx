import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className='bg-slate-950 text-slate-300 py-12'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Brand Column */}
          <div className='flex flex-col gap-4'>
            <Logo className='text-white' />
            <p className='text-sm leading-relaxed max-w-xs'>
              We build high-quality software for forward-thinking companies.
              Based in San Francisco, working globally.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-sm'>
              <li>
                <Link
                  href='/about'
                  className='hover:text-white transition-colors'>
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href='/contact'
                  className='hover:text-white transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Services</h3>
            <ul className='flex flex-col gap-2 text-sm'>
              <li>
                <Link
                  href='/services/web'
                  className='hover:text-white transition-colors'>
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href='/services/mobile'
                  className='hover:text-white transition-colors'>
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href='/services/cloud'
                  className='hover:text-white transition-colors'>
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href='/services/ui-ux'
                  className='hover:text-white transition-colors'>
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Connect</h3>
            <div className='flex items-center gap-4'>
              <a
                href='https://x.com/sagormajomder'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
                aria-label='Twitter'>
                <Twitter size={24} />
              </a>
              <a
                href='https://github.com/sagormajomder'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
                aria-label='GitHub'>
                <Github size={24} />
              </a>
              <a
                href='https://linkedin.com/in/sagor-majomder'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
                aria-label='LinkedIn'>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-slate-800 pt-8 text-center text-sm text-slate-400'>
          <p>
            &copy; {new Date().getFullYear()} DevConsult Agency. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
