import React from 'react'
import {Route , Routes} from'react-router-dom'
import SplashScreen from'./pages/SplashScreen'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import HomePage from './pages/HomePage'
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx'
import UserLogout from './pages/UserLogout'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SplashScreen/>} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup/>} />  
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/home' element={<UserProtectedWrapper>
          <HomePage/>
        </UserProtectedWrapper>} />
        <Route path='users/logout' element={<UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>}
        />
       
      </Routes>
    </div>
  )
}

export default App

