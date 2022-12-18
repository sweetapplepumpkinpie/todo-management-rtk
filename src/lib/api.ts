import Axios from "axios"

import { IUser } from "./../types"

Axios.defaults.baseURL =
  process.env.REACT_APP_SERVER_URL || "http://localhost:3000/api"

export const API = {
  login: (user: IUser) => Axios.post("auth/login", user),
  register: (user: IUser) => Axios.post("auth/register", user),
  verify: () => Axios.get("auth/verify"),
  getTodos: () => Axios.get("/todos"),
}
