import React, { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import avatar from '../images/avatar.png'
const UserMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const logout = () => {
    localStorage.removeItem('user')
    window.location.reload()
  }
  return (
    <div className='user-menu'>
      <div className='hamburger'>
        <Hamburger color='#313131' size={16} toggled={isOpen} toggle={setOpen} />
      </div>
      <img className='avatar' src={avatar} height={32} width={32} />
      <button className={isOpen ? 'logout-btn':'hidden'} onClick={logout} >Logout</button>
    </div>
  )
}

export default UserMenu