import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/mock-data';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { id } = await params;
  const serviceId = parseInt(id);
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return notFound();
  }

  return (
    <div className='container mx-auto py-12 px-4'>
      <div className='mb-8'>
        <Link
          href='/services'
          className='inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors'>
          <ArrowLeft className='mr-2 h-4 w-4' />
          Back to Services
        </Link>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <div className='relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg'>
          <Image
            src={service.image}
            alt={service.name}
            fill
            className='object-cover'
            priority
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>

        <div className='flex flex-col justify-center'>
          <div className='flex items-center gap-4 mb-4'>
            <Badge variant='secondary' className='text-sm py-1 px-3'>
              {service.category}
            </Badge>
            <span className='text-2xl font-bold text-primary'>
              {service.price}
            </span>
          </div>

          <h1 className='text-4xl font-bold tracking-tight mb-6 text-slate-900'>
            {service.name}
          </h1>

          <p className='text-lg text-slate-600 mb-8 leading-relaxed'>
            {service.description}
          </p>

          <div className='space-y-4 mb-8'>
            <h3 className='text-lg font-semibold'>Key Features:</h3>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {service.features?.map((feature, index) => (
                <li key={index} className='flex items-center text-slate-700'>
                  <CheckCircle2 className='h-5 w-5 text-green-500 mr-2 flex-shrink-0' />
                  {feature}
                </li>
              )) || (
                <li className='text-slate-500'>No specific features listed.</li>
              )}
            </ul>
          </div>

          <Button size='lg' className='w-full sm:w-auto'>
            Book This Service
          </Button>
        </div>
      </div>
    </div>
  );
}
