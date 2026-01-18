import {
  Blocks,
  Cloud,
  Globe,
  PenTool,
  Shield,
  Smartphone,
} from 'lucide-react';

export default function ServicesPreview() {
  const services = [
    {
      title: 'Web Development',
      description:
        'High-performance React & Next.js applications built for SEO and speed. We build the frontend that converts.',
      icon: Globe,
    },
    {
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile experiences using React Native and Flutter. Reach users on iOS and Android.',
      icon: Smartphone,
    },
    {
      title: 'Cloud Infrastructure',
      description:
        'Scalable AWS and Google Cloud architecture. We handle DevOps so you can focus on product.',
      icon: Cloud,
    },
    {
      title: 'UI/UX Design',
      description:
        'User-centric design systems that are beautiful and functional. From wireframes to high-fidelity prototypes.',
      icon: PenTool,
    },
    {
      title: 'API Integration',
      description:
        'Seamlessly connect your systems with Stripe, Twilio, Salesforce, or build custom REST/GraphQL APIs.',
      icon: Blocks,
    },
    {
      title: 'Security Audits',
      description:
        'Protect your data and your users. We perform penetration testing and code reviews to ensure compliance.',
      icon: Shield,
    },
  ];

  return (
    <section
      className='py-20 lg:py-28 bg-[#f8f9fc] dark:bg-[#101622]'
      id='services'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-[#0d121b] sm:text-4xl dark:text-white'>
            Our Expertise
          </h2>
          <p className='mt-4 text-lg text-[#334155] dark:text-slate-400'>
            Comprehensive technical solutions for scaling businesses.
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={index}
              className='group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-[#135bec] hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-[#135bec]'>
              <div className='mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-[#135bec] dark:bg-blue-900/20 dark:text-blue-300'>
                <service.icon className='w-8 h-8' />
              </div>
              <h3 className='mb-3 text-xl font-bold text-[#0d121b] dark:text-white'>
                {service.title}
              </h3>
              <p className='text-[#334155] dark:text-slate-400'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
