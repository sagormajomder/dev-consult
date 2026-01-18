import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='relative overflow-hidden py-16 lg:py-24 bg-[#f8f9fc] dark:bg-[#101622]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-2 lg:gap-8 items-center'>
          <div className='flex flex-col items-start gap-6'>
            <div className='inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-sm font-medium text-[#135bec] dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300'>
              <span className='flex h-2 w-2 rounded-full bg-[#135bec] mr-2'></span>
              Available for new projects
            </div>
            <h1 className='text-4xl font-black leading-tight tracking-tight text-[#0d121b] sm:text-5xl lg:text-6xl dark:text-white'>
              Build Software That{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-500'>
                Scales
              </span>
            </h1>
            <p className='text-lg text-[#334155] dark:text-gray-400 max-w-lg leading-relaxed'>
              We turn complex business problems into elegant software solutions.
              Partner with a senior-only team that delivers excellence from day
              one.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2'>
              <Link
                href='/contact'
                className='flex h-12 items-center justify-center rounded-lg bg-[#135bec] px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 hover:-translate-y-0.5 w-full sm:w-auto'>
                Schedule Consultation
              </Link>
              <Link
                href='#work'
                className='flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-base font-bold text-slate-700 transition-all hover:border-[#135bec] hover:text-[#135bec] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-[#135bec] w-full sm:w-auto'>
                View Case Studies
              </Link>
            </div>
            <div className='mt-4 flex items-center gap-4 text-sm text-[#64748b] dark:text-slate-400'>
              <div className='flex -space-x-2'>
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64',
                ].map((src, i) => (
                  <div
                    key={i}
                    className='relative h-8 w-8 rounded-full border-2 border-white dark:border-[#101622] overflow-hidden'>
                    <Image
                      src={src}
                      alt='User'
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>
                ))}
              </div>
              <span>Trusted by 50+ startups</span>
            </div>
          </div>
          <div className='relative lg:h-auto lg:w-full'>
            <div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 p-2'>
              <div className='relative h-full w-full rounded-xl overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
                  alt='Team working'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
            </div>
            {/* Decorative blob */}
            <div className='absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-blue-100 blur-3xl dark:bg-blue-900/20'></div>
            <div className='absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-indigo-100 blur-3xl dark:bg-indigo-900/20'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
