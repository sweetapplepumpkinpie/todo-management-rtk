import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"

import { authReducer } from "./auth/auth.slice"
import { todoReducer } from "./todo/todo.slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  },
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
export type TAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  unknown,
  Action<string>
>
