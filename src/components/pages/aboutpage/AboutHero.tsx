import Container from '@/components/layouts/Container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <div className='relative w-full bg-[#f8f9fc] dark:bg-[#101622] py-12 md:py-20'>
      <Container>
        <div className='@container'>
          <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
            <div className='w-full lg:w-1/2 aspect-video relative rounded-lg shadow-2xl overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop'
                alt='Modern collaborative workspace'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                className='object-cover'
                loading='eager'
              />
            </div>
            <div className='flex flex-col gap-6 lg:w-1/2 lg:pl-10'>
              <div className='flex flex-col gap-4 text-left'>
                <h1 className='text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-[#0d121b] dark:text-white'>
                  Architecting the{' '}
                  <span className='text-[#135bec]'>Digital Future</span>
                </h1>
                <p className='text-base md:text-lg font-normal leading-relaxed text-[#4c669a] dark:text-gray-300'>
                  We are more than just developers; we are strategic partners in
                  your digital transformation. Since 2015, DevConsult has been
                  bridging the gap between complex business challenges and
                  elegant technical solutions.
                </p>
              </div>
              <div className='flex gap-4'>
                <Button className='h-12 px-6 text-base font-bold bg-[#135bec] hover:bg-[#135bec]/90 text-white shadow-lg shadow-blue-500/20'>
                  Our Vision
                </Button>
                <Button
                  variant='secondary'
                  className='h-12 px-6 text-base font-bold text-[#135bec] bg-[#eef2ff] hover:bg-[#e0e7ff]'>
                  See Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
