'use client';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import DropzoneInput from '@/components/form/DropzoneInput';

type SandboxForm = {
  text: string;
};

export default function FormSandbox() {
  const methods = useForm<SandboxForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<SandboxForm> = (data) => {
    // !STARTERCONF Remove console log, use logger instead
    // eslint-disable-next-line no-console
    console.log(data);
    return;
  };

  return (
    <div className='p-6 space-y-4 w-fit mx-auto'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='w-fit space-y-4'>
          <DropzoneInput
            id='photo'
            label='Upload File'
            validation={{ required: 'Photo must be filled' }}
            accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
            helperText='You can upload file with .png, .jpg, atau .jpeg extension.'
          />
        </form>
      </FormProvider>
    </div>
  );
}
