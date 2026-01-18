import Container from '@/components/layouts/Container';
import { Button } from '@/components/ui/button';

export default function AboutCTA() {
  return (
    <div className='w-full bg-[#135bec] py-16'>
      <Container>
        <div className='max-w-[960px] mx-auto text-center flex flex-col items-center gap-6'>
          <h2 className='text-3xl md:text-4xl font-bold leading-tight text-white'>
            Ready to Build the Future?
          </h2>
          <p className='text-white/80 text-lg max-w-2xl'>
            Whether you need a consultation or are looking for your next career
            move, we'd love to hear from you.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-4'>
            <Button className='h-12 px-8 bg-white text-[#135bec] text-base font-bold shadow-lg hover:bg-gray-100 transition-colors'>
              Start a Project
            </Button>
            <Button
              variant='outline'
              className='h-12 px-8 bg-black/20 text-white text-base font-bold hover:bg-black/30 transition-colors border border-white/30'>
              Join Our Team
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
