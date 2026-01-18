import Image from 'next/image';

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: 'Discovery & Strategy',
      description:
        'We dive deep into your business goals, technical requirements, and user needs to chart the path forward.',
    },
    {
      id: 2,
      title: 'Design & Prototyping',
      description:
        'Visualizing the solution with wireframes and UI designs to ensure we are building the right product.',
    },
    {
      id: 3,
      title: 'Agile Development',
      description:
        'Iterative sprints with regular demos. You see progress every two weeks, keeping us aligned.',
    },
    {
      id: 4,
      title: 'Launch & Support',
      description:
        'Smooth deployment to production and ongoing maintenance to keep your software running perfectly.',
    },
  ];

  return (
    <section
      className='bg-slate-50 py-16 lg:py-24 dark:bg-slate-900'
      id='process'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight text-[#0d121b] sm:text-4xl dark:text-white'>
              How We Work
            </h2>
            <p className='mt-4 text-lg text-[#334155] dark:text-slate-400'>
              Our proven methodology ensures transparency and quality at every
              stage of development.
            </p>
            <div className='mt-10 space-y-8'>
              {steps.map(step => (
                <div key={step.id} className='flex gap-4'>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${
                      step.id === 1
                        ? 'bg-[#135bec] text-white'
                        : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                    {step.id}
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-[#0d121b] dark:text-white'>
                      {step.title}
                    </h3>
                    <p className='mt-2 text-[#334155] dark:text-slate-400'>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='relative h-full w-full lg:h-auto'>
            <div className='aspect-square w-full rounded-2xl overflow-hidden shadow-2xl relative'>
              <Image
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
                alt='Team collaborating'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
