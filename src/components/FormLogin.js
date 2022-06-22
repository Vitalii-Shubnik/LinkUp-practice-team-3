import React from "react";
import "../styles/Login.css";
import { Formik } from "formik";
import * as Yup from "yup";

const Basic = () => {
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
          <form className="form2" onSubmit={handleSubmit}>
            <input
              className="input1"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              className="input1"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className="errors">
              {errors.email && touched.email && errors.email}
            </div>
            <div className="errors">
              {errors.password && touched.password && errors.password}
            </div>
            <button className="login-sbm" type="submit" disabled={isSubmitting}>
              Login
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Basic;
