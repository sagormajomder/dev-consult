import Container from '@/components/layouts/Container';

export default function MissionStatement() {
  return (
    <div className='w-full bg-white dark:bg-[#151c2b] py-20'>
      <Container>
        <div className='max-w-[960px] mx-auto text-center flex flex-col gap-6'>
          <span className='text-primary font-bold tracking-wider uppercase text-sm'>
            Our Mission
          </span>
          <h2 className='text-3xl md:text-4xl font-black leading-tight text-[#0d121b] dark:text-white'>
            "To empower businesses by building robust, scalable software
            solutions that drive growth, efficiency, and innovation."
          </h2>
        </div>
      </Container>
    </div>
  );
}
