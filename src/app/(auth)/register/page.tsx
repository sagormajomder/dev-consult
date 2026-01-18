'use client';

import SocialButtons from '@/components/auth-pages/SocialButtons';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue('image', file);
    }
  };

  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo';
    const uploadPreset =
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'unsigned_preset';

    formData.append('upload_preset', uploadPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        },
      );
      const data = await response.json();
      if (data.secure_url) {
        return data.secure_url;
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const onSubmit = async (data: any) => {
    try {
      let imageUrl = '';
      if (data.image) {
        setUploading(true);
        imageUrl = await uploadToCloudinary(data.image);
        setUploading(false);
      }

      const payload = { ...data, image: imageUrl };

      // Simulate API registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Registration Data:', payload);
      toast.success('Successfully created account!');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      setUploading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white p-8 rounded-2xl shadow-sm border border-slate-100'>
      <Toaster position='top-right' />

      <div className='mb-8'>
        <div className='flex gap-6 border-b border-slate-200'>
          <Link
            href='/login'
            className='pb-3 text-sm font-medium text-slate-500 hover:text-slate-800'>
            Login
          </Link>
          <Link
            href='/register'
            className='pb-3 text-sm font-semibold text-primary border-b-2 border-primary'>
            Sign Up
          </Link>
        </div>

        <h2 className='mt-6 text-3xl font-bold tracking-tight text-slate-900'>
          Create Account
        </h2>
        <p className='mt-2 text-sm text-slate-500'>
          Join our community of developers and start <br /> building amazing
          projects.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        {/* Image Upload */}
        <div className='flex flex-col items-center justify-center mb-6'>
          <div className='relative h-24 w-24 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 hover:border-primary transition-colors cursor-pointer group'>
            <input
              type='file'
              accept='image/*'
              className='absolute inset-0 opacity-0 cursor-pointer z-20'
              onChange={handleImageChange}
            />
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt='Preview'
                fill
                className='object-cover'
              />
            ) : (
              <div className='flex flex-col items-center justify-center h-full text-slate-400 group-hover:text-primary'>
                <Upload size={24} />
                <span className='text-[10px] mt-1 font-medium'>Upload</span>
              </div>
            )}
          </div>
          <p className='mt-2 text-xs text-slate-500'>Profile Photo</p>
        </div>

        <div>
          <label
            htmlFor='name'
            className='block text-sm font-semibold leading-6 text-slate-900'>
            Full Name
          </label>
          <div className='mt-2'>
            <input
              id='name'
              type='text'
              placeholder='John Doe'
              className={`block w-full rounded-md border-0 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-4 ${errors.name ? 'ring-red-500' : ''}`}
              {...register('name', { required: 'Full name is required' })}
            />
            {errors.name && (
              <p className='text-red-500 text-xs mt-1'>
                {String(errors.name.message)}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-semibold leading-6 text-slate-900'>
            Email Address
          </label>
          <div className='mt-2'>
            <input
              id='email'
              type='email'
              placeholder='name@company.com'
              className={`block w-full rounded-md border-0 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-4 ${errors.email ? 'ring-red-500' : ''}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className='text-red-500 text-xs mt-1'>
                {String(errors.email.message)}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor='password'
            className='block text-sm font-semibold leading-6 text-slate-900'>
            Password
          </label>
          <div className='mt-2'>
            <input
              id='password'
              type='password'
              placeholder='••••••••'
              className={`block w-full rounded-md border-0 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-4 ${errors.password ? 'ring-red-500' : ''}`}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && (
              <p className='text-red-500 text-xs mt-1'>
                {String(errors.password.message)}
              </p>
            )}
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className='flex items-center'>
          <input
            id='terms'
            type='checkbox'
            className='h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary'
            {...register('terms', { required: 'You must agree to the terms' })}
          />
          <label htmlFor='terms' className='ml-2 block text-sm text-slate-900'>
            I agree to the{' '}
            <a href='#' className='font-semibold text-primary hover:underline'>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href='#' className='font-semibold text-primary hover:underline'>
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.terms && (
          <p className='text-red-500 text-xs mt-0'>
            {String(errors.terms.message)}
          </p>
        )}

        <Button
          type='submit'
          disabled={isSubmitting || uploading}
          className='flex w-full justify-center rounded-md bg-primary px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed'>
          {isSubmitting || uploading ? 'Creating Account...' : 'Sign Up →'}
        </Button>
      </form>

      <SocialButtons />
    </motion.div>
  );
}
