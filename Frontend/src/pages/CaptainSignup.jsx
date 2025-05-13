import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },

      email: email,
      password: password
    })
    //console.log(userData)
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }
  return (
    <div>
      <div className='p-7  h-screen flex flex-col justify-between'>
        <div>
          <img className='w-20 mb-3' src="https://worksheets.clipart-library.com/images2/printable-uber-signs/printable-uber-signs-6.jpg" alt="" />

          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className='text-base font-medium mb-2'>Whats our Captain's  Name</h3>
            <div className='flex gap-4 mb-7'>
              <input
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2  border  text-lg placeholder:text-base  '
                placeholder='First Name' />
              <input
                required
                type="Text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                dat
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2  border text-lg placeholder:text-base  '
                placeholder='Last Name' />

            </div>
            <h3 className='text-base font-medium mb-2'>Whats our captains Email</h3>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-cy
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2  border w-full text-lg placeholder:text-base  '
              placeholder='email@email.com' />
            <h3 className='text-base font-medium mb-2'>Enter Password</h3>
            <input
              required

              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base  '
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password' />
            <button className='bg-[#111111] mb-2 rounded px-4 py-2 font-semibold  w-full text-lg placeholder:text-base text-white  '>Register</button>
            <p className='text-center'>Already Have A account? <Link to="/captain-login" className='text-blue-600'>Login</Link></p>
          </form>
        </div>
        <div>
          <p className='text-{10px} leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span>   and <span className='underline'>terms of service</span>  apply</p>
        </div>

      </div>
    </div>
  )
}

export default CaptainSignup