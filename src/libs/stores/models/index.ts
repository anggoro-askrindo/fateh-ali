import { combineReducers } from '@reduxjs/toolkit'

import api from '../../api'
import layoutModel from './layout'
import preferenceModel from './preference'

const rootReducer = combineReducers({
  layout: layoutModel,
  preference: preferenceModel,
  [api.reducerPath]: api.reducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
