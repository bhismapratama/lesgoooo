'use client';

import * as React from 'react';
import { toast, ToastBar, Toaster, ToastOptions } from 'react-hot-toast';
import { HiX } from 'react-icons/hi';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function Toast() {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
          style: {
            borderRadius: '8px',
            background: '#E8F0E0',
            color: '#8AB364',
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button
                    className='rounded-full p-1 ring-primary-400 transition hover:text-[#444] focus:outline-none focus-visible:ring'
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <HiX />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
}

const DEFAULT_TOAST: ToastOptions = {
  style: {
    background: '#F0F2F5',
    color: '#9AA2B1',
  },
  icon: <RiErrorWarningLine />,
  className: 'w-[375px] [&>div]:justify-start',
  position: 'top-center',
  duration: 5000,
};

const createCustomToast = (options: ToastOptions) => {
  return { ...DEFAULT_TOAST, ...options };
};

const showToast = (message: string, options?: ToastOptions) => {
  return toast(message, options || DEFAULT_TOAST);
};

export { createCustomToast, showToast };

const INFO_TOAST = createCustomToast({
  style: {
    background: '#c3daf2',
    color: '#357f8a',
  },
  icon: <RiErrorWarningLine size={30} />,
  className: 'w-[375px] [&>div]:justify-start',
  position: 'top-center',
  duration: 5000,
});
const SUCCESS_TOAST = createCustomToast({
  style: {
    background: '#b9e2cd',
    color: '#1ca35f',
  },
  icon: <RiErrorWarningLine size={30} />,
  className: 'w-[375px] [&>div]:justify-start',
  position: 'top-center',
  duration: 5000,
});
const DANGER_TOAST = createCustomToast({
  style: {
    background: '#eebfc1',
    color: '#c73036',
  },
  icon: <RiErrorWarningLine size={30} />,
  className: 'w-[375px] [&>div]:justify-start',
  position: 'top-center',
  duration: 5000,
});

const WARNING_TOAST = createCustomToast({
  style: {
    background: '#ffedca',
    color: '#b58d3c',
  },
  icon: <RiErrorWarningLine size={30} />,
  className: 'w-[375px] [&>div]:justify-start',
  position: 'top-center',
  duration: 5000,
});

export { DANGER_TOAST, INFO_TOAST, SUCCESS_TOAST, WARNING_TOAST };
