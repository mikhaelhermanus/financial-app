// lib/features/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false, // State untuk menandakan proses loading
    error: null,    // State untuk menampung error message
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        requestLogin: (state) => {
            state.loading = true;
            state.error = null; // Reset error ketika login dimulai
        },
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = true;
            localStorage.setItem("token", token);
        },
        failureLogin: (state, action) => {
            state.loading = false;
            state.error = action.payload; // Simpan error message
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        },
    },
});

export const { setCredentials, failureLogin, successLogin, logout } = authSlice.actions;
export default authSlice.reducer;
