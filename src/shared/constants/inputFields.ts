import { IInputField } from "../../types"

export const loginFields: IInputField[] = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    placeholder: "Password",
  },
]

export const registerFields: IInputField[] = [
  {
    labelText: "Name",
    labelFor: "name",
    id: "name",
    name: "name",
    type: "text",
    autoComplete: "name",
    required: true,
    placeholder: "Name",
  },
  {
    labelText: "Email",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    placeholder: "Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirmPassword",
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    autoComplete: "confirmPassword",
    required: true,
    placeholder: "Confirm Password",
  },
]
