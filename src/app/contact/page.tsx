import Container from '@/components/layouts/Container';
import ContactForm from '@/components/pages/contactpage/ContactForm';
import ContactHeader from '@/components/pages/contactpage/ContactHeader';
import ContactInfo from '@/components/pages/contactpage/ContactInfo';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-[#f8f9fc] dark:bg-[#101622] pb-20'>
      <ContactHeader />
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
          {/* Left Column: Form (Span 2) */}
          <div className='lg:col-span-2'>
            <ContactForm />
          </div>

          {/* Right Column: Info (Span 1) */}
          <div className='lg:col-span-1'>
            <ContactInfo />
          </div>
        </div>
      </Container>
    </div>
  );
}
