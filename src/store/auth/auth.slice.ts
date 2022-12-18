import axios from "axios"
import { createSlice } from "@reduxjs/toolkit"

import { IUser } from "./../../types"
import { login, verify } from "./auth.actions"

export interface IAuthState {
  loading: boolean
  token?: string
  user: IUser | null
}

const initialState: IAuthState = {
  loading: false,
  user: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token")
      axios.defaults.headers.common["Authorization"] = ""
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.token = payload.token
        state.loading = false
      })
      .addCase(login.rejected, (state) => {
        state.loading = false
      })
      .addCase(verify.pending, (state) => {
        state.loading = true
      })
      .addCase(verify.fulfilled, (state, { payload }) => {
        state.user = payload
        state.loading = false
      })
      .addCase(verify.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer
