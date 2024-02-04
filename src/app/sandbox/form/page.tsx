'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { HiAcademicCap } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';

type FormValues = {
  username: string;
  password: string;
  leftIcon: string;
  rightIcon: string;
  bothIcon: string;
  readOnly: string;
  disabled: string;
  bothIconDisabled: string;
};

export default function InputPage() {
  const methods = useForm<FormValues>({ mode: 'onChange' });

  const { handleSubmit } = methods;

  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div className='p-4 w-full min-h-screen bg-white'>
      <FormProvider {...methods}>
        <form className='max-w-sm space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='Username'
            id='username'
            placeholder='Your username'
            validation={{ required: 'This field is required!' }}
            helperText='Input your username'
          />
          <Input
            type='password'
            label='Password'
            id='password'
            placeholder='Your password'
          />
          <Input
            label='Left Icon'
            id='leftIcon'
            placeholder='Left Icon'
            leftIcon={HiAcademicCap}
          />
          <Input
            label='Right Icon'
            id='rightIcon'
            placeholder='Right Icon'
            rightIcon={HiAcademicCap}
          />
          <Input
            label='Both Icon'
            id='bothIcon'
            placeholder='Both Icon'
            leftIcon={HiAcademicCap}
            rightIcon={HiAcademicCap}
          />
          <Input label='Read Only' id='readOnly' value='Read Only' readOnly />
          <Input
            label='Disabled'
            id='disabled'
            placeholder='Disabled'
            helperText='This is helper'
            disabled
          />
          <Input
            label='Disabled Both Icon'
            id='bothIconDisabled'
            placeholder='Disabled Both Icon'
            helperText='This is helper'
            leftIcon={HiAcademicCap}
            rightIcon={HiAcademicCap}
            disabled
          />
          <Button type='submit' className='w-full'>
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
