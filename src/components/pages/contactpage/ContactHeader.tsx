import Container from '@/components/layouts/Container';

export default function ContactHeader() {
  return (
    <div className='w-full pt-16 pb-8 md:pt-24 md:pb-12 bg-[#f8f9fc] dark:bg-[#101622]'>
      <Container>
        <div className='flex flex-col gap-4 max-w-2xl'>
          <h1 className='text-4xl md:text-5xl font-black tracking-tight text-[#0d121b] dark:text-white'>
            Ready to start your project?
          </h1>
          <p className='text-lg text-[#4c669a] dark:text-gray-400 leading-relaxed'>
            Tell us about your needs and we'll get back to you within 24 hours.
            Let's build something scalable and robust together.
          </p>
        </div>
      </Container>
    </div>
  );
}
