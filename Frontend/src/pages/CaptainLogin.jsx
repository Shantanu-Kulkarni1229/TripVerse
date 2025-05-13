import React ,{useState} from 'react'

import { Link } from 'react-router-dom'

const CaptainLogin = () =>  {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault();
    setCaptainData({
      email:email,
       password:password
    })
    //console.log(captainData)
    setEmail('')
    setPassword('')
    
  }
  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-3' src="https://worksheets.clipart-library.com/images2/printable-uber-signs/printable-uber-signs-6.jpg" alt="" />

        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
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
        <p className='text-center'>Join A Fleet? <Link to="/captain-signup" className='text-blue-600'>Register as A captain</Link></p>
        </form>
      </div>
      <div>
        <Link to="/login" className='bg-[#111111] flex items-center justify-center  mb-5 rounded px-4 py-2 font-semibold  w-full text-lg placeholder:text-base text-white  '>Sign in as User </Link>
      </div>

    </div>
  )
}

export default CaptainLogin