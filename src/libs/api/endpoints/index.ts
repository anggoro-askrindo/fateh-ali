import authEndpoints from './auth'
import userEndpoints from './user'
import type { EndpointBuilder } from "@reduxjs/toolkit/query"

const endpoints = (builder: EndpointBuilder<any, any, any>) => ({   // eslint-disable-line
    ...authEndpoints(builder),
    ...userEndpoints(builder)
})

export default endpoints