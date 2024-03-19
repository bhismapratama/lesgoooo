'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { serialize } from 'object-to-formdata';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import api from '@/lib/api';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';

import { ApiError } from '@/types/api';
import { AddRegisterTest, RegisterTest } from '@/types/RegisterTest';

export default function RegistTest() {
  const router = useRouter();

  const { mutate: addRegistTests } = useMutation<
    AxiosResponse<RegisterTest>,
    AxiosError<ApiError>,
    FormData
  >({
    mutationFn: (data) =>
      api.post('/naon', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess: () => {
      // localStorage.setItem('daftarIsDone', 'true');
      showToast('Data sudah terkirim!', SUCCESS_TOAST);
      methods.reset();
      router.push('/');
    },
    onError: () => {
      showToast('Terjadi Kesalahan!', DANGER_TOAST);
      throw new Error();
    },
  });

  const methods = useForm<AddRegisterTest>();
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const onSubmit = (data: AddRegisterTest) => {
    const body = {
      ...data
    };
    addRegistTests(serialize(body));
  };


  return (
    <div className='lg:px-4 xl:px-12 2xl:px-14'>
      <div className='flex flex-col justify-center gap-8 lg:gap-14 px-6 py-7 lg:px-0'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-12'>
            <div className='space-y-6'>
              <Input
                id='nama'
                label='Nama'
                placeholder='Masukkan nama'
                validation={{
                  required: 'Nama tidak boleh kosong!',
                  pattern: {
                    value: /^[A-Za-z0-9\s',.-]+$/,
                    message:
                      'Harap masukkan nama yang valid. Hanya boleh mengandung huruf, angka, spasi, tanda hubung, tanda petik satu, koma, dan titik.',
                  },
                }}
              />
              <Input
                id='institusi'
                label='Institusi / Sekolah'
                placeholder='Masukkan institusi asal / sekolah'
                validation={{
                  required: 'Institusi / Sekolah tidak boleh kosong!',
                  pattern: {
                    value: /^[A-Za-z0-9\s',.-]+$/,
                    message:
                      'Harap masukkan nama institusi yang valid. Hanya boleh mengandung huruf, angka, spasi, tanda hubung, tanda petik satu, koma, dan titik.',
                  },
                }}
              />
              <Input
                id='email'
                label='Email'
                placeholder='Masukkan email'
                validation={{
                  required: 'Email tidak boleh kosong!',
                  pattern: {
                    value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                    message: 'Berikan alamat email yang sesuai!',
                  },
                }}
              />
              <Input
                id='no_wa'
                label='Nomor Telepon/WA'
                placeholder='Nomor telepon/wa, ex: +6281234567890.'
                validation={{
                  required: 'Nomor telepon harap diisi!',
                  pattern: {
                    value: /^(\+62)?[\s-]?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
                    message:
                      'Harap masukkan nomor telepon/wa yang valid dengan format yang sesuai, ex: +6281234567890.',
                  },
                }}
              />
              <Button
                type='submit'
                variant='primary'
                disabled={!isDirty ? true : false}
                className='w-full drop-shadow-md py-3 sm:py-4 hover:bg-success-700 active:bg-success-800'
              >
                <Typography
                  font='poppins'
                  className='text-[14px] md:text-[16px] leading-[21px] sm:leading-6 text-white'
                  weight='bold'
                >
                  Daftar
                </Typography>
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
