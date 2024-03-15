import Typography from '@/components/Typography';

export default function ErrorMessage({ children }: { children: string }) {
  return (
    <div className='flex space-x-1'>
      <Typography
        variant='c12'
        font='poppins'
        weight='medium'
        className='!leading-tight text-danger-600 text-xs'
      >
        {children}
      </Typography>
    </div>
  );
}
