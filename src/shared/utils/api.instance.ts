import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import type { APIResponse } from '@shared/types';

export const apiClient = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError<APIResponse<unknown>>) => {
    const backendMessage = error.response?.data?.error;
    const fallbackMessage = error.message || 'Error with network request';

    const customError = new Error(backendMessage || fallbackMessage);
    return Promise.reject(customError);
  }
);
