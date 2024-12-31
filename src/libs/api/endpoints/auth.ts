/* eslint-disable */
import type { EndpointBuilder } from "@reduxjs/toolkit/query"

const userEndpoints = (builder: EndpointBuilder<any, any, any>) => ({ // eslint-disable-line
  login: builder.mutation<any, any>({
    query: (dto) => ({
      url: `/login`,
      method: 'POST',
      body: { email: dto.email, password: dto.password },
    }),
  }),

  logout: builder.mutation<any, any>({
    query: (dto) => ({
      url: `/logout`,
      method: 'POST',
      body: { ref: dto.ref, requester: dto.requester }
    }),
  }),
})

export default userEndpoints
