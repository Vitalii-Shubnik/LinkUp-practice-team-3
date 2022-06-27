import React from 'react'
import { useNavigate } from "react-router-dom";

const AuthMenu = () => {
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate('/sign-up');
  }
  const handleClickLogIn = () => {
    navigate('/sign-in');
  }
  return (
    <div className='auth-menu'>
      <button className='auth-btn log-in-btn' onClick={handleClickLogIn}>Log in</button>
      <button className='auth-btn sign-up-btn' onClick={handleClickSignUp}>Sign up</button>
    </div>
  )
}

export default AuthMenu