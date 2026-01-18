import { Clock, DollarSign, Users } from 'lucide-react';

export default function WhyUsSection() {
  return (
    <section className='py-20 lg:py-28 bg-[#f8f9fc] dark:bg-[#101622]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-[#0d121b] sm:text-4xl dark:text-white'>
            Why Choose DevConsult?
          </h2>
          <p className='mt-4 text-lg text-[#334155] dark:text-slate-400'>
            We aren't just coders; we are product partners invested in your
            success.
          </p>
        </div>
        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='rounded-xl bg-blue-50 p-8 dark:bg-blue-900/10'>
            <Users className='mb-4 w-10 h-10 text-[#135bec]' />
            <h3 className='mb-2 text-lg font-bold text-[#0d121b] dark:text-white'>
              Senior-Only Teams
            </h3>
            <p className='text-[#334155] dark:text-slate-400'>
              No juniors learning on your dime. Our engineers have an average of
              7+ years of experience.
            </p>
          </div>
          <div className='rounded-xl bg-blue-50 p-8 dark:bg-blue-900/10'>
            <Clock className='mb-4 w-10 h-10 text-[#135bec]' />
            <h3 className='mb-2 text-lg font-bold text-[#0d121b] dark:text-white'>
              Time-Zone Aligned
            </h3>
            <p className='text-[#334155] dark:text-slate-400'>
              We work when you work. Real-time collaboration without the
              communication lag.
            </p>
          </div>
          <div className='rounded-xl bg-blue-50 p-8 dark:bg-blue-900/10'>
            <DollarSign className='mb-4 w-10 h-10 text-[#135bec]' />
            <h3 className='mb-2 text-lg font-bold text-[#0d121b] dark:text-white'>
              Transparent Pricing
            </h3>
            <p className='text-[#334155] dark:text-slate-400'>
              Clear estimates and no hidden fees. We respect your budget and
              deliver maximum value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
