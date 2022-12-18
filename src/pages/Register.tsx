import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "../components/Input"
import { useAppDispatch } from "../hooks"
import { registerFields } from "../shared/constants/inputFields"
import { register } from "../store/auth/auth.actions"
import { IUser } from "../types"

export const Register = () => {
  const [registerState, setLoginState] = useState<IUser>({
    email: "",
    password: "",
  })
  const dispatch = useAppDispatch()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event

    setLoginState({
      ...registerState,
      [name]: value,
    })
  }
  const handleRegister = () => {
    if (
      registerState.email &&
      registerState.name &&
      registerState.password &&
      registerState.password === registerState.confirmPassword
    ) {
      dispatch(register(registerState))
    }
  }

  return (
    <div className='container w-96 mt-10 mx-auto'>
      <div className='shadow-xl p-10 rounded-lg text-center'>
        <h2 className='text-2xl'>Register</h2>
        {registerFields.map((field) => (
          <Input
            key={field.id}
            onChange={handleChange}
            value={registerState[field.name as keyof IUser]}
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
          onClick={handleRegister}
          className='bg-blue-400 hover:bg-blue-500 rounded-xl px-5 py-3 text-white'
        >
          Register
        </button>
        <div>
          <Link
            to='/login'
            className='text-blue-400 hover:text-blue-500 rounded-xl px-5 py-3 text-white'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
