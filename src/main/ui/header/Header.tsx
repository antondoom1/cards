import {PATH} from '../routes/RoutePages'
import {NavLink} from 'react-router-dom'

export const Header = () => {
  return (
    <div>

      <NavLink to={PATH.LOGIN}>login </NavLink>
      <NavLink to={PATH.REGISTER}>register </NavLink>
      <NavLink to={PATH.PROFILE}>profile </NavLink>
      <NavLink to={PATH.RECOVERY_PASSWORD}>recovery password </NavLink>
      <NavLink to={PATH.ENTERING_A_NEW_PASSWORD}>new password </NavLink>
      <NavLink to={PATH.DEMO}>test </NavLink>

    </div>
  )
}

