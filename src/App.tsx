import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router"

import "./App.css"
import { useAppDispatch } from "./hooks"
import { Layout } from "./layout"

import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { TodoList } from "./pages/TodoList"
import { verify } from "./store/auth/auth.actions"
import { selectToken, selectUser } from "./store/auth/auth.selector"

function App() {
  const token = useSelector(selectToken)
  const dispatch = useAppDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    token && dispatch(verify())
  }, [token])
  return (
    <Routes>
      {user ? (
        <Route path='/' element={<Layout user={user} />}>
          <Route path='/todos' element={<TodoList />}></Route>
          <Route path='*' element={<Navigate to='todos' />}></Route>
        </Route>
      ) : (
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<Navigate to='login' />}></Route>
        </Route>
      )}
    </Routes>
  )
}

export default App
