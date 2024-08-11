import type { AxiosRequestConfig } from 'axios';
import axios, { isAxiosError } from 'axios';

const apiInstance = axios.create({
  // FIXME: 백에서 localhost:3000 등록 후 원래 도메인으로 변경
  baseURL: '/',
  responseType: 'json',
});

// 요청 인터셉터
apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터
apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (isAxiosError(error) && error.response) {
      const errorResponse = {
        status: error.response.status,
        message: error.response.data?.message || 'An error occurred',
        code: error.response.data?.code || 'UNKNOWN_ERROR',
      };
      return Promise.reject(errorResponse);
    }
    return Promise.reject(error);
  },
);

export const typedGet = async <T>(url: string, config?: AxiosRequestConfig) => {
  const response = await apiInstance.get<T>(url, config);
  return response.data;
};

export const typedPost = async <T>(
  url: string,
  data: unknown,
  config?: AxiosRequestConfig,
) => {
  const response = await apiInstance.post<T>(url, data, config);
  console.log('res', response);
  return response.data;
};

export const typedPut = async <T>(
  url: string,
  data: unknown,
  config?: AxiosRequestConfig,
) => {
  const response = await apiInstance.put<T>(url, data, config);
  return response.data;
};

export const typedDelete = async <T>(
  url: string,
  config?: AxiosRequestConfig,
) => {
  const response = await apiInstance.delete<T>(url, config);
  return response.data;
};
