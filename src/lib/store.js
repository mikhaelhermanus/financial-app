// lib/store.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import authReducer from './features/authSlice';
import registerReducer from './features/registerSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer, // Reducer untuk auth state
    register: registerReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
