import React from "react";
import "../styles/login.css";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import FormLogin from "../components/FormLogin";

const SignUp = () => {
  return (
    <div className="login_main_containter">
      <div className="login_block signin_image_block"></div>
      <div className="login_block signin_form_block">
        <div className="login_form_space">
          <div className="login_form_header">
            <div className="login_form_title">Welcome</div>
            <div className="login_form_subtitle">
              Enter information below for login
            </div>
          </div>
          <FormLogin />
          <Link style={{ textDecoration: "none" }} to="/">
            {/* change route above to login */}
            <div className="login_form_footer">
              New User?
              <span className="login_form_footer_green"> Sign Up</span>
            </div>
          </Link>
        </div>
      </div>
      <Link className="cross" style={{ textDecoration: "none" }} to="/">
        <MdOutlineClose height={12} width={12} color="#313131" />
      </Link>
    </div>
  );
};

export default SignUp;
