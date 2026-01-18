'use client';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/mock-data';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  details: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    toast.success('Message sent! We will get back to you soon.');
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className='bg-white dark:bg-[#151c2b] p-8 md:p-10 rounded-xl shadow-sm border border-[#cfd7e7] dark:border-gray-700 w-full'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row gap-6'>
          {/* Full Name */}
          <div className='flex flex-col gap-2 w-full'>
            <label
              htmlFor='fullName'
              className='text-sm font-bold text-[#0d121b] dark:text-white'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              placeholder='John Doe'
              {...register('fullName', { required: 'Full Name is required' })}
              className={`h-12 px-4 rounded-md border bg-white dark:bg-[#101622] text-[#0d121b] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all placeholder:text-gray-400 ${
                errors.fullName
                  ? 'border-red-500'
                  : 'border-[#cfd7e7] dark:border-gray-700'
              }`}
            />
            {errors.fullName && (
              <span className='text-xs text-red-500'>
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Work Email */}
          <div className='flex flex-col gap-2 w-full'>
            <label
              htmlFor='email'
              className='text-sm font-bold text-[#0d121b] dark:text-white'>
              Work Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='name@company.com'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className={`h-12 px-4 rounded-md border bg-white dark:bg-[#101622] text-[#0d121b] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all placeholder:text-gray-400 ${
                errors.email
                  ? 'border-red-500'
                  : 'border-[#cfd7e7] dark:border-gray-700'
              }`}
            />
            {errors.email && (
              <span className='text-xs text-red-500'>
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* Project Type */}
        <div className='flex flex-col gap-2 w-full'>
          <label
            htmlFor='projectType'
            className='text-sm font-bold text-[#0d121b] dark:text-white'>
            Project Type
          </label>
          <div className='relative'>
            <select
              id='projectType'
              {...register('projectType', {
                required: 'Please select a project type',
              })}
              defaultValue=''
              className={`w-full h-12 px-4 rounded-md border bg-white dark:bg-[#101622] text-[#0d121b] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all appearance-none cursor-pointer ${
                errors.projectType
                  ? 'border-red-500'
                  : 'border-[#cfd7e7] dark:border-gray-700'
              }`}>
              <option value='' disabled>
                Select what you are looking to build
              </option>
              {SERVICES.map(service => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
            <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400'>
              <svg
                width='12'
                height='8'
                viewBox='0 0 12 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1 1.5L6 6.5L11 1.5'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
          {errors.projectType && (
            <span className='text-xs text-red-500'>
              {errors.projectType.message}
            </span>
          )}
        </div>

        {/* Project Details */}
        <div className='flex flex-col gap-2 w-full'>
          <label
            htmlFor='details'
            className='text-sm font-bold text-[#0d121b] dark:text-white'>
            Project Details
          </label>
          <textarea
            id='details'
            rows={6}
            placeholder='Tell us about the project goals, timeline, and budget...'
            {...register('details', {
              required: 'Project details are required',
              minLength: {
                value: 10,
                message: 'Please provide at least 10 characters',
              },
            })}
            className={`p-4 rounded-md border bg-white dark:bg-[#101622] text-[#0d121b] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all placeholder:text-gray-400 resize-y ${
              errors.details
                ? 'border-red-500'
                : 'border-[#cfd7e7] dark:border-gray-700'
            }`}></textarea>
          {errors.details && (
            <span className='text-xs text-red-500'>
              {errors.details.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className='pt-2'>
          <Button
            type='submit'
            disabled={isSubmitting}
            className='bg-[#135bec] hover:bg-[#135bec]/90 text-white font-bold h-12 px-8 text-base shadow-lg shadow-blue-500/25 inline-flex gap-2 items-center disabled:opacity-70 disabled:cursor-not-allowed'>
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <Send className='w-4 h-4' />}
          </Button>
        </div>
      </form>
    </div>
  );
}
