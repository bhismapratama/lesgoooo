'use client';

import { useMutation } from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import api from '@/lib/api';
import { setToken } from '@/lib/cookies';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';

import useAuthStore from '@/store/useAuthStore';

import { ApiReturn } from '@/types/api';
import { loginForm, loginRes } from '@/types/entities/login';
import { User } from '@/types/entities/user';

export default function LoginPage() {
  const methods = useForm<loginForm>({
    mode: 'onTouched'
  })
  const route = useRouter()
  const { handleSubmit } = methods

  const { login } = useAuthStore()

  const { mutate: loginMutation, isPending } = useMutation<
    loginRes,
    ApiError,
    loginForm
  >({
    mutationFn: async data => {
      const res = await api.post('/naon', data);
      const { token } = res.data;
      setToken(token);

      const user = await api.get<ApiReturn<User>>('/');
      login({ ...user.data.data, token: token });
      {
        user.data.roles === 'admin'
          ? route.push('/admin')
          : route.push('/user')
      }

      const bege = res.data;
      // console.log(bege);

      return bege
    }
  }
  )

  const onSubmit = (data: loginForm) => (
    loginMutation(data)
  )


  return (
    <div className='flex flex-col justify-center gap-8 px-12 lg:px-0'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-12'>
          <div className='space-y-3'>
            <div className='space-y-4'>
              <Input
                id='email'
                label='Email'
                placeholder='Enter your email'
                validation={{
                  required: 'Field must be filled',
                }}
              />
              <Input
                id='password'
                label='Password'
                placeholder='Enter your password'
                type='password'
                validation={{
                  required: 'Field must be filled',
                }}
              />
            </div>
          </div>
          <div className='space-y-3 flex flex-col w-full items-center lg:items-start'>
            <Button
              type='submit'
              size='base'
              variant='primary'
              className='w-full drop-shadow-md py-[6px] md:py-3'
            >
              <Typography
                as="p"
                font='poppins'
                variant='bt'
                className='text-[11.86px] leading-[20.32px] text-whites-100'
                weight='bold'
              >
                {!isPending ? 'Login' : 'Logging in...'}
              </Typography>
            </Button>
            <Typography
              as="p"
              font='poppins'
              variant='c14'
              className='text-[11.86px] leading-[20.32px] text-whites-1100'
              weight='medium'
            >
              Don’t have an account?{' '}
              <UnstyledLink href="/register" className='text-primary-700'>
                Register
              </UnstyledLink>
            </Typography>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
