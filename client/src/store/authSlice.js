import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: true },
    reducers: {
        login: state => {
            state.isAuthenticated = true
            console.log(state.isAuthenticated);
        },
        logout: state => {
            state.isAuthenticated = false
            console.log(state.isAuthenticated)
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer