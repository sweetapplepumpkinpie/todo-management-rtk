import { useMemo } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { headerList } from "../shared/constants/headerList"
import { logout } from "../store/auth/auth.slice"
import { IUser } from "../types"

interface IProps {
  user?: IUser | null
}

export const Header: React.FC<IProps> = ({ user }) => {
  const dispatch = useAppDispatch()
  const list = useMemo(() => {
    return user ? headerList.filter((list) => list.className) : headerList
  }, [user, headerList])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className='bg-yellow-600 py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-row text-white '>
          {list.map((item) => {
            return (
              <Link
                to={`/${item.path}`}
                key={item.path}
                className={item.className}
              >
                <div className='px-4'>
                  <p className='capitalize'>{item.label}</p>
                </div>
              </Link>
            )
          })}
          {user && <button onClick={handleLogout}>Logout</button>}
        </div>
      </div>
    </div>
  )
}
