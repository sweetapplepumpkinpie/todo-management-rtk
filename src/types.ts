import { ChangeEvent } from "react"

export interface IUser {
  name?: string
  email: string
  password: string
  confirmPassword?: string
}

export type TNavItem = {
  label: string
  path: string
  className?: string
}

export interface IInputField {
  labelText?: string
  labelFor?: string
  id?: string
  name: string
  type: string
  autoComplete?: string
  required?: boolean
  placeholder?: string
  value?: string | number
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface ITodo {
  title: string
  content: string
}
