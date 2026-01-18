import { Star } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: `"DevConsult transformed our legacy system into a modern cloud powerhouse. The team was professional, fast, and incredibly skilled."`,
      author: 'James Wilson',
      role: 'CTO, FinTech Global',
      image:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      text: `"We needed to scale our mobile app quickly after a viral launch. DevConsult stepped in and handled the load seamlessly."`,
      author: 'Sarah Jenkins',
      role: 'Product Lead, SocialApp',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      text: `"The best development agency I've worked with. Their attention to detail in UI/UX is unmatched in the industry."`,
      author: 'Michael Chen',
      role: 'Founder, E-Shop',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
    },
  ];

  return (
    <section
      className='py-16 lg:py-24 bg-[#f8f9fc] dark:bg-[#101622]'
      id='testimonials'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='mb-16 text-center text-3xl font-bold tracking-tight text-[#0d121b] sm:text-4xl dark:text-white'>
          Trusted by Industry Leaders
        </h2>
        <div className='grid gap-8 md:grid-cols-3'>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className='flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/50'>
              <div className='mb-6 flex text-yellow-400 gap-1'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 fill-current border-none' />
                ))}
              </div>
              <p className='mb-6 flex-1 text-[#334155] dark:text-slate-300 italic'>
                {item.text}
              </p>
              <div className='flex items-center gap-4'>
                <div className='relative h-12 w-12 rounded-full overflow-hidden bg-slate-200'>
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover'
                  />
                </div>
                <div>
                  <h4 className='font-bold text-[#0d121b] dark:text-white'>
                    {item.author}
                  </h4>
                  <p className='text-sm text-slate-500'>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
