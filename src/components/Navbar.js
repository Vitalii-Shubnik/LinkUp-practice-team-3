import React, {useState} from 'react'
import '../styles/navbar.css'
import logo from '../images/logo.png'
import Search from './Search'
import {BsCart2} from 'react-icons/bs'
import AuthMenu from './AuthMenu'
import UserMenu from './UserMenu'

const NavBar = () => {
  const [count, setCount] = useState(9);
  const [user, setUser] = useState(true);
  return (
    <div className='navbardiv'>
      <div className='content-wrapper'>
        <div className='image_div'>
          <img src={logo} alt='logo' />
        </div>
        <Search/>
        <div className='right-panel'>
          <div className='navbar-cart'>
            <BsCart2 size={'24px'} className='cart-icon' />
            <div className='counter'>
              {count > 9 ? '9+': count}
            </div>
          </div>
          <div className='auth-menu'>
            {user ? <UserMenu/> : <AuthMenu/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar