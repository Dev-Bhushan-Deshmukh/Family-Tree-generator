import { configureStore } from '@reduxjs/toolkit'
import parentReducer from './Slice/treeSlice'
export const store = configureStore({
  reducer: {
parent:parentReducer

  },
})