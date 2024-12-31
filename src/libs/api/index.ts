import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./common";
import endpoints from "./endpoints";

const { API_VERSION } = process.env

const api = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: API_VERSION ? '/v'.padEnd(3, API_VERSION) : '' }),
  endpoints: (builder) => endpoints(builder),
});

export const {
  useLoginMutation
} = api;

export default api;
