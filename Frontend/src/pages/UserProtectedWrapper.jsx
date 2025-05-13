import React, {useContext , useEffect} from 'react'
import { useNavigate } from'react-router-dom'
import {UserDataContext} from '../context/userContext'

const UserProtectedWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
// Assuming children is passed as a prop to this component
    const navigate = useNavigate()

    useEffect(() => {
        if(!token) {
            navigate('/login')
        }
    }, [token])


  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper