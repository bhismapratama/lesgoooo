export interface ApiReturn<T> {
  data: T;
  messages: string,
  roles: string;
}

export interface ApiError {
  code?: number;
  message: string;
  status: number;
}

export type UninterceptedApiError = {
  message: string | Record<string, string[]>;
};

type PaginateData<Data> = {
  status: string | undefined;
  data: Data;
  meta: {
    // sesuaikan
  };
};

export interface PaginatedApiResponse<DataType> {
  status: string | undefined;
  data: PaginateData<DataType>;
}

export type CustomAxiosError = {
  response?: {
    data: {
      message: string;
    };
  };
} & Error;
