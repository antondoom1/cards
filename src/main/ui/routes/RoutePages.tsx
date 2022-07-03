import {Navigate, Route, Routes} from 'react-router-dom'
import {Login} from '../../../features/auth/login/Login'
import {Register} from '../../../features/auth/register/Register'
import {Error404} from '../pages/Error404'
import {Profile} from '../pages/Profile'
import {RecoveryPassword} from '../pages/RecoveryPassword'
import {EnteringANewPassword} from '../pages/EnteringANewPassword'
import {Demo} from '../../../features/test/Demo'

export const PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  RECOVERY_PASSWORD: '/recovery-password',
  ENTERING_A_NEW_PASSWORD: '/entering-a-new-password',
  DEMO: '/demo'
}

export const RoutePages = () => {
  return (
    <div>
      <Routes>

        <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>

        <Route path={PATH.LOGIN} element={<Login/>}/>
        <Route path={PATH.REGISTER} element={<Register/>}/>
        <Route path={PATH.PROFILE} element={<Profile/>}/>
        <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword/>}/>
        <Route path={PATH.ENTERING_A_NEW_PASSWORD} element={<EnteringANewPassword/>}/>
        <Route path={PATH.DEMO} element={<Demo/>}/>

        <Route path={'/*'} element={<Error404/>}/>

      </Routes>
    </div>
  )
}

