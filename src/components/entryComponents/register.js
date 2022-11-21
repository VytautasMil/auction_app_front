import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../contexts/userContext';

function Register() {

  const username = useRef();
  const password1 = useRef();
  const password2 = useRef();
  const connObj = useContext(UserContext);
  const socket = connObj.connection.socket;

  function registerAttempt() {
    if (password1.current.value === password2.current.value) {
      socket.emit('register', { password: password1.current.value, username: username.current.value })
    }
  }

  return (
    <div>
      <input type="text" placeholder='Username' ref={username} />
      <input type="password" placeholder='Password' ref={password1} />
      <input type="password" placeholder='Repeat password' ref={password2} />
      <button onClick={registerAttempt}>Register</button>
    </div>
  )
}

export default Register