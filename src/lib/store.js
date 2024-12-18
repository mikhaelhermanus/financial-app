// lib/store.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer, // Reducer untuk auth state
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
