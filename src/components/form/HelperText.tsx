import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/Typography';

export default function HelperText({
  children,
  helperTextClassName,
}: {
  children: ReactNode;
  helperTextClassName?: string;
}) {
  return (
    <div className='flex space-x-1'>
      <Typography
        variant='c12'
        font='poppins'
        color='secondary'
        weight='medium'
        className={clsxm(
          '!leading-tight text-whites-1000 text-[12px]',
          helperTextClassName
        )}
      >
        {children}
      </Typography>
    </div>
  );
}
