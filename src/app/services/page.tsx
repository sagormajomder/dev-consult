import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SERVICES } from '@/lib/mock-data';
import {
  ArrowRight,
  Bug,
  Cloud,
  Code,
  PenTool,
  Rocket,
  Smartphone,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Icon mapping helper
const IconMap: { [key: string]: any } = {
  Code: Code,
  Cloud: Cloud,
  Smartphone: Smartphone,
  Rocket: Rocket,
  Bug: Bug,
  PenTool: PenTool,
};

export default function ServicesPage() {
  return (
    <div className='container mx-auto py-8 px-4'>
      {/* Header Section */}
      <div className='flex justify-between items-center mb-8'>
        <p className='text-slate-600 font-medium'>
          Showing{' '}
          <span className='text-slate-900 font-bold'>{SERVICES.length}</span>{' '}
          services
        </p>
        {/* Sort by UI explicitly excluded as per request */}
      </div>

      {/* Grid Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {SERVICES.map(service => {
          const Icon = IconMap[service.icon] || Code;

          return (
            <Card
              key={service.id}
              className='overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 border-slate-200 bg-white group p-0 gap-0 rounded-2xl'>
              {/* Image Section */}
              <div className='relative h-48 w-full bg-slate-100'>
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                  loading='eager'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />

                {/* Category Badge overlay on image bottom-left */}
                <div className='absolute bottom-3 left-3'>
                  <Badge
                    variant='secondary'
                    className='bg-slate-900/80 text-white hover:bg-slate-900 border-none backdrop-blur-sm px-3 py-1 text-xs font-medium'>
                    {service.category}
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <CardHeader className='pb-2 pt-5 px-5'>
                <div className='flex justify-between items-center w-full'>
                  <CardTitle className='text-lg font-bold text-slate-900 leading-tight pr-2'>
                    {service.name}
                  </CardTitle>
                  <Icon className='h-5 w-5 text-slate-400 flex-shrink-0' />
                </div>
              </CardHeader>

              <CardContent className='flex-grow px-5 pb-4'>
                <p className='text-slate-500 text-sm line-clamp-3 leading-relaxed'>
                  {service.description}
                </p>
              </CardContent>

              {/* Footer Section */}
              <CardFooter className='px-5 padding-bottom-5 pt-0 mt-auto flex items-center justify-between border-t border-slate-100/50'>
                <div className='flex flex-col pt-4 pb-5'>
                  <span className='text-xs text-slate-400 font-medium uppercase'>
                    Starting at
                  </span>
                  <span className='text-blue-600 font-bold text-base'>
                    From {service.price}
                  </span>
                </div>

                <Link href={`/services/${service.id}`} className='pt-4 pb-5'>
                  <Button
                    variant='ghost'
                    className='p-0 h-auto font-semibold text-slate-700 hover:text-blue-600 hover:bg-transparent flex items-center gap-1 group/btn'>
                    Details
                    <ArrowRight className='h-4 w-4 transition-transform group-hover/btn:translate-x-1' />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
