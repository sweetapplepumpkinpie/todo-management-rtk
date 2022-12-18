import { IAuthState } from "./auth.slice"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { API } from "../../lib/api"
import { IUser } from "../../types"

export const login = createAsyncThunk("auth/login", async (user: IUser) => {
  const response = await API.login(user)
  // The value we return becomes the `fulfilled` action payload
  localStorage.setItem("token", response.data.token)
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${response.data.token}`
  return response.data
})

export const register = createAsyncThunk(
  "auth/register",
  async (user: IUser) => {
    const response = await API.register(user)
    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

export const verify = createAsyncThunk("auth/verify", async () => {
  const token = localStorage.getItem("token")
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  const response = await API.verify()
  // The value we return becomes the `fulfilled` action payload
  return response.data
})
