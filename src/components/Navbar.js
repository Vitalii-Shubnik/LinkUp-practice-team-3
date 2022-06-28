import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../images/logo.png";
import Search from "./Search";
import { BsCart2 } from "react-icons/bs";
import AuthMenu from "./AuthMenu";
import UserMenu from "./UserMenu";
import { url } from "../constants/constants";

const NavBar = ({ visionCard, setVisionCard }) => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(localStorage.getItem('user'));
  useEffect(() => {
    const getCounter = async() => {
      const data = await fetch(`${url}/user/cart`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${JSON.parse(userData)}`
        },
      }).then(data=>data.json())
      console.log(data)
      setCount(data.length)
    }
    getCounter()
  }, [])

  return (
    <div className='navbar-div'>
      <div className='content-wrapper'>
        <div className='image_div'>
          <img src={logo} alt='logo' className='logo-image' />
        </div>
        <Search />
        <div className="right-panel">
          <button
            className="cart_btn"
            onClick={() => setVisionCard(!visionCard)}
          >
            <div className="navbar-cart">
              <BsCart2 size={"24px"} className="cart-icon" />
              <div className="counter">{count > 9 ? "9+" : count}</div>
            </div>
          </button>
          <div className="auth-menu">{userData !== 'undefined' && userData ? <UserMenu /> : <AuthMenu />}</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
