import React from "react";
import "../styles/Login.css";
import logo from "../images/pexels.png";
import Basic from "../components/FormLogin";
import { MdOutlineClose } from "react-icons/md";

function Login() {
  return (
    <div className="content">
      <img className="imagelogo" src={logo} alt="Logo" />
      <div className="form2">
        <div className="wel_label1">Welcome</div>
        <div className="wel_label2">Enter information below for login</div>
        <div className="form3">
          <Basic />
          <div className="signup">
            New User?
            <a className="anchor" href="/">
              Sign Up
            </a>
          </div>
          <a className="cross" href="/">
            <MdOutlineClose height={12} width={12} color="#313131" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
