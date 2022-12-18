import { Outlet } from "react-router"
import { IUser } from "../types"
import { Header } from "./Header"

interface IProps {
  user?: IUser | null
}

export const Layout: React.FC<IProps> = ({ user }) => {
  return (
    <div>
      <Header user={user} />
      <Outlet />
    </div>
  )
}
