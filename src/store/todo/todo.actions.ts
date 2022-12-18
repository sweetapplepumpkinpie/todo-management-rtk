import { createAsyncThunk } from "@reduxjs/toolkit"

import { API } from "../../lib/api"

export const getTodos = createAsyncThunk("/todos", async () => {
  const response = await API.getTodos()
  // The value we return becomes the `fulfilled` action payload
  return response.data
})
