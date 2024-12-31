import type { EndpointBuilder } from "@reduxjs/toolkit/query"
import type { User } from '@prisma/client'

const userEndpoints = (builder: EndpointBuilder<any, any, any>) => ({ // eslint-disable-line
  getBatchUser: builder.mutation<any, any>({
    query: (dto) => ({
      url: `/user`,
      method: 'POST',
      body: dto,
    }),
  }),

  getSingleUserById: builder.mutation<any, any>({
    query: (dto) => ({
      url: `/user/${dto.id}`,
      method: 'POST',
      body: { }
    }),
  }),

  createSingleUser: builder.mutation<any, any>({
    query: (dto) => ({
      url: `/user/create`,
      method: 'POST',
      body: dto,
    }),
  }),

  updateSingleUser: builder.mutation<any, any>({
    query: (dto) => ({
      url: `/user/update/${dto.id}`,
      method: 'POST',
      body: { },
    }),
  }),

  deleteSingleUser: builder.mutation<any, any>({
    query: (dto) => ({
      url: `/user/delete/${dto.id}`,
      method: 'POST',
      body: { },
    }),
  }),
})

export default userEndpoints
