import React, { useEffect, useState } from "react";
import "../styles/auth.css";
import { MdOutlineClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import FormLogin from "../components/FormLogin";

const SignIn = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    user !== "undefined" && user && navigate("/");
  }, []);
  return (
    <div className="main_containter">
      <div className="block auth_image_block" style={{ width: "1112px" }}></div>
      <div className="block auth_form_block">
        <div className="login_form_space">
          <div className="form_header">
            <div className="form_title">Welcome</div>
            <div className="form_subtitle">
              Enter information below for login
            </div>
          </div>
          <FormLogin />
          <Link style={{ textDecoration: "none" }} to="/sign-up">
            {/* change route above to login */}
            <div className="form_footer">
              New User?
              <span className="form_footer_green"> Sign Up</span>
            </div>
          </Link>
        </div>
      </div>
      <Link className="exit" style={{ textDecoration: "none" }} to="/">
        <MdOutlineClose height={12} width={12} color="#313131" />
      </Link>
    </div>
  );
};

export default SignIn;
