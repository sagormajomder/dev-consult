'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Successfully logged in!');
        router.push('/services');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Login failed');
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
            className='pb-3 text-sm font-semibold text-primary border-b-2 border-primary'>
            Login
          </Link>
        </div>

        <h2 className='mt-6 text-3xl font-bold tracking-tight text-slate-900'>
          Welcome Back
        </h2>
        <p className='mt-2 text-sm text-slate-500'>
          Enter your credentials to access your development <br /> dashboard and
          project tools.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
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
              autoComplete='email'
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

        <div className='relative'>
          <div className='flex items-center justify-between'>
            <label
              htmlFor='password'
              className='block text-sm font-semibold leading-6 text-slate-900'>
              Password
            </label>
            <div className='text-sm'>
              <a
                href='#'
                className='font-semibold text-primary hover:text-blue-500'>
                Forgot Password?
              </a>
            </div>
          </div>
          <div className='mt-2 relative'>
            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='••••••••'
              autoComplete='current-password'
              className={`block w-full rounded-md border-0 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-4 ${errors.password ? 'ring-red-500' : ''}`}
              {...register('password', { required: 'Password is required' })}
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute inset-y-0 right-0 flex items-center pr-3 hover:text-primary transition-colors text-slate-400'>
              {showPassword ? (
                <EyeOff className='h-5 w-5' />
              ) : (
                <Eye className='h-5 w-5' />
              )}
            </button>
            {errors.password && (
              <p className='text-red-500 text-xs mt-1'>
                {String(errors.password.message)}
              </p>
            )}
          </div>
        </div>

        <Button
          type='submit'
          disabled={isSubmitting}
          className='flex w-full justify-center rounded-md bg-primary px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed'>
          {isSubmitting ? 'Signing in...' : 'Sign In →'}
        </Button>
      </form>

      {/* <SocialButtons /> */}

      <p className='mt-8 text-center text-xs text-slate-500'>
        By signing in, you agree to our{' '}
        <a href='#' className='font-semibold text-slate-900 hover:underline'>
          Terms of Service
        </a>{' '}
        and{' '}
        <a href='#' className='font-semibold text-slate-900 hover:underline'>
          Privacy Policy
        </a>
        .
      </p>
    </motion.div>
  );
}
