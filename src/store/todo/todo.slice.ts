import { createSlice } from "@reduxjs/toolkit"

import { ITodo } from "./../../types"
import { getTodos } from "./todo.actions"

export interface ITodoState {
  loading: boolean
  token?: string
  todo: ITodo | null
  todos: ITodo[]
}

const initialState: ITodoState = {
  loading: false,
  todo: null,
  todos: [],
}

export const todolice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true
      })
      .addCase(getTodos.fulfilled, (state, { payload }) => {
        state.todos = payload
        state.loading = false
      })
      .addCase(getTodos.rejected, (state) => {
        state.loading = false
      })
  },
})

export const todoReducer = todolice.reducer
