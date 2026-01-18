'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function CTASection() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;

    if (emailInput && emailInput.value) {
      toast.success('Subscribed successfully!');
      form.reset();
    } else {
      toast.error('Please enter a valid email.');
    }
  };

  return (
    <section className='bg-[#135bec] py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-3xl font-black tracking-tight text-white sm:text-4xl'>
            Ready to start your project?
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-blue-100'>
            Let's discuss how we can help you build your next big idea. Schedule
            a free 30-minute consultation.
          </p>
          <Link href='/contact' className='mt-8'>
            <Button className='rounded-lg bg-white px-8 py-6 text-lg font-bold text-[#135bec] shadow-xl transition-transform hover:-translate-y-1 hover:bg-slate-50 border-none'>
              Let's Talk Code
            </Button>
          </Link>
          <div className='mt-12 w-full max-w-md border-t border-blue-400/30 pt-10'>
            <p className='mb-4 text-sm font-medium text-blue-100'>
              Or subscribe to our newsletter for tech insights
            </p>
            <form className='flex gap-2' onSubmit={handleSubscribe}>
              <input
                name='email'
                className='w-full rounded-lg border-0 bg-blue-800/50 px-4 py-3 text-white placeholder-blue-300 focus:ring-2 focus:ring-white outline-none'
                placeholder='Enter your email'
                type='email'
                required
              />
              <button
                className='rounded-lg bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 transition-colors'
                type='submit'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
