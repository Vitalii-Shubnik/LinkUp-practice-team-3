import React from 'react'
import { Formik } from 'formik'
const SignUpForm = () => {
  return (
    <>
      <Formik
        initialValues={{ firstname: '', lastname: '', email: '', password: '', confirmPassword: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          if (values.password.length < 6) {
            errors.password = 'Password must contain 6 or more symbols'
          } else if (values.password !== values.confirmPassword) {
            errors.password = 'Passwords don`t match'
          }
          return errors;
        }}
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className='dddd'>
            <div className='inputs_in_row'>
              <input
                className='form-input'
                placeholder='First Name'
                type="text"
                name="firstname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
              />
              <input
                className='form-input'
                placeholder='Last Name'
                type="text"
                name="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
              />
            </div>
            <input
              className='form-input'
              placeholder='Email addres'
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              className='form-input'
              placeholder='Password'
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <input
              className='form-input'
              placeholder='Confirm password'
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <div className='errors'>
              {errors.email && touched.email && errors.email}
              {errors.password && touched.password && errors.password}
            </div>
            <button className='submit_button' type="submit" disabled={isSubmitting}>
              Next
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default SignUpForm