import AuthSidebar from '@/components/auth-pages/AuthSidebar';
import Container from '@/components/layouts/Container';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='py-14 bg-slate-50 flex items-center'>
      <Container>
        <section className='grid lg:grid-cols-2 overflow-hidden rounded-2xl shadow-xl border border-slate-200 bg-white'>
          {/* Testimonial / Brand Side - Hidden on Mobile */}
          <AuthSidebar />

          {/* Form Side - Always Visible */}
          <div className='flex flex-col justify-center bg-white p-8 lg:p-12'>
            <div className='mx-auto w-full max-w-md'>{children}</div>
          </div>
        </section>
      </Container>
    </div>
  );
}
