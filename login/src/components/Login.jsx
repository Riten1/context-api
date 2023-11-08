import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <input type='text' placeholder='username' ></input>

    </div>
  )
}

export default Login