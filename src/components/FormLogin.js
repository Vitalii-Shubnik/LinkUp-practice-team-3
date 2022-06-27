import React from "react";
import "../styles/auth.css";
import { Formik } from "formik";
import * as Yup from "yup";

const FormLogin = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password is too short!")
      .max(50, "Password is too long!")
      .required("Password is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              className="login_form_input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div
              className={`error ${touched.email && errors.email && "shown"}`}
            >
              {errors.email}
            </div>
            <input
              className="login_form_input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            <div
              className={`error ${
                touched.password && errors.password && "shown"
              }`}
            >
              {errors.password}
            </div>
            <button
              className="login_sub_button"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
