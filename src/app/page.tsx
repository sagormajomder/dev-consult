import CTASection from '@/components/pages/homepage/CTASection';
import HeroSection from '@/components/pages/homepage/HeroSection';
import ProcessSection from '@/components/pages/homepage/ProcessSection';
import ServicesPreview from '@/components/pages/homepage/ServicesPreview';
import TestimonialsSection from '@/components/pages/homepage/TestimonialsSection';
import WhyUsSection from '@/components/pages/homepage/WhyUsSection';
import WorkSection from '@/components/pages/homepage/WorkSection';

export default function HomePage() {
  return (
    <section className='space-y-10'>
      <HeroSection />
      <ServicesPreview />
      <WhyUsSection />
      <ProcessSection />
      <WorkSection />
      <TestimonialsSection />
      <CTASection />
    </section>
  );
}
