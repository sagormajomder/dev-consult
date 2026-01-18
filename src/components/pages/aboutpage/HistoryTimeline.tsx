import Container from '@/components/layouts/Container';
import { Briefcase, Building2, Flag, Trophy } from 'lucide-react';

export default function HistoryTimeline() {
  return (
    <div className='w-full bg-white dark:bg-[#151c2b] py-16'>
      <Container>
        <div className='max-w-[960px] mx-auto'>
          <h2 className='text-[32px] md:text-4xl font-bold leading-tight text-[#0d121b] dark:text-white mb-12 text-center'>
            Our History
          </h2>
          <div className='grid grid-cols-[60px_1fr] gap-x-6'>
            {/* Step 1 */}
            <div className='flex flex-col items-center gap-1 pt-1 h-full'>
              <div className='w-10 h-10 rounded-full bg-[#135bec]/10 flex items-center justify-center text-[#135bec]'>
                <Flag className='w-5 h-5' />
              </div>
              <div className='w-[2px] bg-[#cfd7e7] dark:bg-gray-700 min-h-16 grow'></div>
            </div>
            <div className='flex flex-col pb-8'>
              <span className='text-[#135bec] font-bold text-sm tracking-wider'>
                2015
              </span>
              <h3 className='text-xl font-bold text-[#0d121b] dark:text-white mt-1'>
                Founded in San Francisco
              </h3>
              <p className='text-[#4c669a] dark:text-gray-400 text-base font-normal mt-2'>
                Started as a small team of three in a shared workspace.
              </p>
            </div>

            {/* Step 2 */}
            <div className='flex flex-col items-center gap-1 h-full'>
              <div className='w-[2px] bg-[#cfd7e7] dark:bg-gray-700 h-8'></div>
              <div className='w-10 h-10 rounded-full bg-[#135bec]/10 flex items-center justify-center text-[#135bec]'>
                <Briefcase className='w-5 h-5' />
              </div>
              <div className='w-[2px] bg-[#cfd7e7] dark:bg-gray-700 min-h-16 grow'></div>
            </div>
            <div className='flex flex-col pb-8'>
              <span className='text-[#135bec] font-bold text-sm tracking-wider'>
                2017
              </span>
              <h3 className='text-xl font-bold text-[#0d121b] dark:text-white mt-1'>
                First Enterprise Client
              </h3>
              <p className='text-[#4c669a] dark:text-gray-400 text-base font-normal mt-2'>
                Secured a major contract with a Fortune 500 financial firm.
              </p>
            </div>

            {/* Step 3 */}
            <div className='flex flex-col items-center gap-1 h-full'>
              <div className='w-[2px] bg-[#cfd7e7] dark:bg-gray-700 h-8'></div>
              <div className='w-10 h-10 rounded-full bg-[#135bec]/10 flex items-center justify-center text-[#135bec]'>
                <Building2 className='w-5 h-5' />
              </div>
              <div className='w-[2px] bg-[#cfd7e7] dark:bg-gray-700 min-h-16 grow'></div>
            </div>
            <div className='flex flex-col pb-8'>
              <span className='text-[#135bec] font-bold text-sm tracking-wider'>
                2019
              </span>
              <h3 className='text-xl font-bold text-[#0d121b] dark:text-white mt-1'>
                Global Expansion
              </h3>
              <p className='text-[#4c669a] dark:text-gray-400 text-base font-normal mt-2'>
                Opened our second office in London to serve European markets.
              </p>
            </div>

            {/* Step 4 */}
            <div className='flex flex-col items-center gap-1 pb-1'>
              <div className='w-[2px] bg-[#cfd7e7] dark:bg-gray-700 h-8'></div>
              <div className='w-10 h-10 rounded-full bg-[#135bec]/10 flex items-center justify-center text-[#135bec]'>
                <Trophy className='w-5 h-5' />
              </div>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#135bec] font-bold text-sm tracking-wider'>
                2023
              </span>
              <h3 className='text-xl font-bold text-[#0d121b] dark:text-white mt-1'>
                Awarded Top Dev Shop
              </h3>
              <p className='text-[#4c669a] dark:text-gray-400 text-base font-normal mt-2'>
                Recognized for excellence in custom software delivery.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
