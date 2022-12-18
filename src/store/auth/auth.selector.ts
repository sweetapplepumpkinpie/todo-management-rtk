import { TRootState } from "./../index"

export const selectUser = (state: TRootState) => state.auth.user
export const selectToken = (state: TRootState) =>
  state.auth.token || localStorage.getItem("token")
