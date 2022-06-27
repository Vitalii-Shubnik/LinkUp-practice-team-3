import React from 'react'
import { useNavigate } from "react-router-dom";

const AuthMenu = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sign-up');
  }

  return (
    <div className='auth-menu'>
      <button className='auth-btn log-in-btn' onClick={handleClick}>Log in</button>
      <button className='auth-btn sign-up-btn' onClick={handleClick}>Sign up</button>
    </div>
  )
}

export default AuthMenu