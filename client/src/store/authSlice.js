import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: !!localStorage.getItem("token") },
    reducers: {
        login: state => {
            state.isAuthenticated = true
        },
        logout: state => {
            state.isAuthenticated = false
        }
    },
    extraReducers: {}
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer