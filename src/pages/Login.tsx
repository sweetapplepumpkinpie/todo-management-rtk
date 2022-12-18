import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { Input } from "../components/Input"
import { loginFields } from "../shared/constants/inputFields"
import { login } from "../store/auth/auth.actions"
import { IUser } from "../types"

export const Login = () => {
  const [loginState, setLoginState] = useState<IUser>({
    email: "",
    password: "",
  })
  const dispatch = useAppDispatch()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event

    setLoginState({
      ...loginState,
      [name]: value,
    })
  }
  const handleLogin = () => {
    if (loginState.email && loginState.password) {
      dispatch(login(loginState))
    }
  }

  return (
    <div className='container w-96 mt-10 mx-auto'>
      <div className='shadow-xl p-10 rounded-lg text-center'>
        <h2 className='text-2xl'>Login</h2>
        {loginFields.map((field) => (
          <Input
            key={field.id}
            onChange={handleChange}
            value={loginState[field.name as keyof IUser]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            required={field.required}
            placeholder={field.placeholder}
          />
        ))}
        <button
          onClick={handleLogin}
          className='bg-blue-400 hover:bg-blue-500 rounded-xl px-5 py-3 text-white'
        >
          Login
        </button>
        <div>
          <Link
            to='/register'
            className='text-blue-400 hover:text-blue-500 rounded-xl px-5 py-3 text-white'
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}
