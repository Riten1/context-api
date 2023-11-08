import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext);

  if (!user) return <div>Enter username</div>
  else return <div>Username: {user}</div>
  
}

export default Profile