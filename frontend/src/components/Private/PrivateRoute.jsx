import { Outlet } from 'react-router-dom'
import { Profile } from '../../pages/Profile'

const useAuth = () => {
  const user = { loggedIn: false }

  return user && user.loggedIn
}

export const PrivateRoute = () => {
  const isAuth = useAuth()

  return isAuth ? <Outlet /> : <Profile />
}