import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkSection() {
  return (
    <section className='bg-slate-50 py-16 lg:py-24 dark:bg-slate-900' id='work'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row mb-12'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight text-[#0d121b] sm:text-4xl dark:text-white'>
              Selected Works
            </h2>
            <p className='mt-2 text-lg text-[#334155] dark:text-slate-400'>
              Innovative projects we've shipped recently.
            </p>
          </div>
        </div>
        <div className='grid gap-8 md:grid-cols-2'>
          {/* Project 1 */}
          <div className='group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg dark:bg-slate-800'>
            <div className='aspect-video w-full overflow-hidden relative'>
              <Image
                src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
                alt='Fintech dashboard'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='p-6'>
              <div className='mb-3 flex gap-2'>
                <span className='rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
                  FinTech
                </span>
                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-200'>
                  React
                </span>
              </div>
              <h3 className='mb-2 text-xl font-bold text-[#0d121b] dark:text-white'>
                FinDash - Analytics Platform
              </h3>
              <p className='text-[#334155] dark:text-slate-400'>
                A real-time financial analytics dashboard handling millions of
                data points with sub-second latency.
              </p>
            </div>
          </div>
          {/* Project 2 */}
          <div className='group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg dark:bg-slate-800'>
            <div className='aspect-video w-full overflow-hidden relative'>
              <Image
                src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
                alt='E-commerce website'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='p-6'>
              <div className='mb-3 flex gap-2'>
                <span className='rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
                  E-Commerce
                </span>
                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-200'>
                  Next.js
                </span>
              </div>
              <h3 className='mb-2 text-xl font-bold text-[#0d121b] dark:text-white'>
                ShopScale - Marketplace
              </h3>
              <p className='text-[#334155] dark:text-slate-400'>
                A multi-vendor marketplace platform built for scale, supporting
                10k+ concurrent users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
