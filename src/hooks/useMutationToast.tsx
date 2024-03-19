import { UseMutationResult } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import * as React from 'react';
import toast from 'react-hot-toast';

import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '../components/Toast';
import { DEFAULT_TOAST_MESSAGE } from '../constant/toast';
import { ApiError, ApiReturn } from '../types/api';

type OptionType = {
  loading?: string;
  success?: string;
  error?: string;
};

export default function useMutationToast<T, K>(
  mutation: UseMutationResult<
    AxiosResponse<ApiReturn<T>> | undefined | void,
    AxiosError<ApiError>,
    K
  >,
  customMessages: OptionType = {}
) {
  const { data, isError, isPending, error } = mutation;

  const toastStatus = React.useRef<string>(data ? 'done' : 'idle');

  React.useEffect(() => {
    const toastMessage = {
      ...DEFAULT_TOAST_MESSAGE,
      ...customMessages,
    };

    if (toastStatus.current === 'done' && !isPending) return;

    if (isError) {
      showToast(
        typeof toastMessage.error === 'string'
          ? toastMessage.error
          : toastMessage.error(error),
        DANGER_TOAST
      );
      toastStatus.current = 'done';
    } else if (isPending) {
      toastStatus.current = toast.loading(toastMessage.loading);
    } else if (data) {
      showToast(
        typeof toastMessage.success === 'string'
          ? toastMessage.success
          : toastMessage.success(data.data),
        SUCCESS_TOAST
      );
      toastStatus.current = 'done';
    }

    return () => {
      toast.dismiss(toastStatus.current);
    };
  }, [customMessages, data, error, isError, isPending]);

  return { ...mutation };
}
