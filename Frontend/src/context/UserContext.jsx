import React from 'react'
export const UserDataContext = createContext()
const UserContext = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        fullName:{
            firstName: '',
            lastName: ''
        },
        password: '',

    })
  return (
    <div>
        <UserDataContext.Provider >
          {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext