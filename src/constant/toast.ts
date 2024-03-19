import { AxiosError } from 'axios';

import { ApiError, ApiReturn } from '../types/api';

type ToastMessage<T> = {
  loading: string;
  success: (res: ApiReturn<T>) => string;
  error: (err: AxiosError<ApiError>) => string;
};

export const DEFAULT_TOAST_MESSAGE: ToastMessage<unknown> = {
  loading: 'Loading...',
  success: (res) => {
    return res.messages || 'Data terkirim!';
  },
  error: (error) => {
    return (
      error?.response?.data?.message ||
      'Ada yang salah nih'
    );
  },
};
