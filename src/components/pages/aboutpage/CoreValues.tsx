import Container from '@/components/layouts/Container';
import { Eye, Lightbulb, RefreshCw, UserCircle } from 'lucide-react';

const VALUES = [
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'Open communication at every stage. We keep you in the loop, always.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Embracing cutting-edge tech stacks to keep you ahead of the curve.',
  },
  {
    icon: RefreshCw,
    title: 'Agility',
    description:
      'Adapting quickly to market changes with flexible methodologies.',
  },
  {
    icon: UserCircle,
    title: 'User-Centricity',
    description:
      'Building with the end-user in mind for intuitive experiences.',
  },
];

export default function CoreValues() {
  return (
    <div className='w-full bg-[#f6f6f8] dark:bg-[#101622] py-16'>
      <Container>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-3 text-center md:text-left'>
            <h2 className='text-[32px] md:text-4xl font-bold leading-tight text-[#0d121b] dark:text-white'>
              Our Core Values
            </h2>
            <p className='text-base font-normal leading-normal text-[#4c669a] dark:text-gray-400 max-w-[720px]'>
              The principles that guide every line of code we write and every
              partnership we build.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {VALUES.map((value, index) => (
              <div
                key={index}
                className='flex flex-col gap-4 rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-white dark:bg-[#151c2b] p-6 hover:shadow-lg transition-shadow duration-300'>
                <div className='w-12 h-12 rounded-full bg-[#135bec]/10 flex items-center justify-center text-[#135bec]'>
                  <value.icon className='w-6 h-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-lg font-bold leading-tight text-[#0d121b] dark:text-white'>
                    {value.title}
                  </h3>
                  <p className='text-sm font-normal text-[#4c669a] dark:text-gray-400 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
