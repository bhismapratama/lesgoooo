'use client';

import React from 'react';

import Button from '@/components/buttons/Button';
import {
  DANGER_TOAST,
  INFO_TOAST,
  showToast,
  SUCCESS_TOAST,
  WARNING_TOAST,
} from '@/components/Toast';

function ParentComponent() {
  return (
    <div className='flex justify-center gap-5 mt-72 '>
      <Button
        variant='primary'
        className='border-none'
        onClick={() => showToast('Info Message', INFO_TOAST)}
      >
        Info Toast
      </Button>
      <Button
        variant='light'
        className='border-none'
        onClick={() => showToast('Success Message', SUCCESS_TOAST)}
      >
        Success Toast
      </Button>
      <Button
        variant='primary'
        className='border-none'
        onClick={() => showToast('Danger Message', DANGER_TOAST)}
      >
        Danger Toast
      </Button>
      <Button
        variant='dark'
        className='border-none'
        onClick={() => showToast('Warning Message', WARNING_TOAST)}
      >
        Warning Toast
      </Button>
    </div>
  );
}

export default ParentComponent;
