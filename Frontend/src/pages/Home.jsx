import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZmZpYyUyMGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400'>
            <img className='w-16 ml-8  ' src="../../public/Images/uberlogo.net_.png" alt="" />
            <div className='bg-white pt-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started With TripVerse</h2>
                <Link to='/login' className='flex item-center justify-center  w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Home