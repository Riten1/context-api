import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext);

  if (!user.username) return <div>Please Login</div>
  else if(!user.password)  return <div>Please Login</div>
  else return <div>Welcome {user.username}</div>
  
}

export default Profile