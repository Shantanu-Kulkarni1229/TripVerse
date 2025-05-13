import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
// FIX: Use correct context name
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const [error, setError] = useState('')

  // FIX: Use correct context
  const [user, setUser] = useContext(UserDataContext)
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    setError('') // Clear previous errors

    const userData = {
      email: email,
      password: password,
    }

    try {
      // FIX: Use correct env variable (adjust as needed)
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      if (response.status === 200) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
    } catch (err) {
      // Handle errors from backend
      if (err.response) {
        // Backend returned an error
        if (err.response.data.error) {
          setError(err.response.data.error)
        } else if (err.response.data.errors && err.response.data.errors.length > 0) {
          setError(err.response.data.errors[0].msg)
        } else {
          setError('Login failed. Please try again.')
        }
      } else {
        // Network or other error
        setError('Network error. Please try again.')
      }
    }
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10  ' src="../../public/Images/uberlogo.net_.png" alt="" />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>Whats Your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2  border w-full text-lg placeholder:text-base  '
            placeholder='email@email.com' />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base  '
            type="password"
            placeholder='password' />
          <button className='bg-[#111111] mb-2 rounded px-4 py-2 font-semibold  w-full text-lg placeholder:text-base text-white  '>Login</button>
        <p className='text-center'>New Here? <Link to="/signup" className='text-blue-600'>Create New Account</Link></p>
        </form>
          {error && <div className="text-red-600 mb-2">{error}</div>}
      </div>
      <div>
        <Link to="/captain-login" className='bg-[#111111] flex items-center justify-center  mb-5 rounded px-4 py-2 font-semibold  w-full text-lg placeholder:text-base text-white  '>Sign in as Captain </Link>
      </div>

    </div>
  )
}

export default UserLogin