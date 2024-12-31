/* eslint-disable */
import client from '../clients/axios'
import type { AxiosRequestConfig } from "axios";

type AxiosBaseQueryProps = {
  baseUrl?: string;
};

export interface AxiosRequestProps extends AxiosRequestConfig {
  url: string;
  method?: string;
  data?: any;
  params?: any;
  headers?: any;
};

export const axiosBaseQuery = ({ baseUrl }: AxiosBaseQueryProps) => async ({ url, method, data, params, headers }: AxiosRequestProps) => {
  try {
    const result = await client({
      url: baseUrl + url,
      method,
      data,
      params,
      headers,
    });
    return { data: result.data };
  } catch (axiosError: unknown | any) {
    const err = axiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};