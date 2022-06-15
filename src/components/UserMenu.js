import React, { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import avatar from '../images/avatar.png'
const UserMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const logout = async() => {
    await alert('logout');
  }
  return (
    <div className='user-menu'>
      <Hamburger color='#313131' size={9} toggled={isOpen} toggle={setOpen} />
      <img className='avatar' src={avatar} height={32} />
      <button className={isOpen ? 'logout-btn':'hidden'} onClick={logout} >Logout</button>
    </div>
  )
}

export default UserMenu