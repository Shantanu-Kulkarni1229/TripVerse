import React, {useContext} from 'react'
import { useNavigate } from'react-router-dom'
import {UserDataContext} from '../context/userContext'

const UserProtectedWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
// Assuming children is passed as a prop to this component
    const navigate = useNavigate()

    if(!token){
        navigate('/login')
    }


  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper