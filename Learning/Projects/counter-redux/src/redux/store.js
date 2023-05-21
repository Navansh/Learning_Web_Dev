import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

export const store = configureStore({
  reducer: {
    Counter : CounterSlice
    //this key's name should be similar to the name given to the slice(CounterSlice) 
    //a centralized store consists of one or many slices
  },
})