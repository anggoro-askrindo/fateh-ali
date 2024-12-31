import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './models'

import api from '../api'
// import { languageMiddleware } from './middlewares'
import type { Action, ThunkAction } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(api.middleware, /*languageMiddleware*/)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
