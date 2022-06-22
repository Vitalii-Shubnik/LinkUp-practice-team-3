import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
const SignUpForm = () => {
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Name is too short!')
      .max(50, 'Name is too long!')
      .required('Name is required'),
    lastname: Yup.string()
      .min(2, 'Lastame is too short!')
      .max(50, 'Lastame is too long!')
      .required('Lastname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password is too short!')
      .max(50, 'Password is too long!')
      .required('Password is required'),
    confirmPassword: Yup.string().test('password-match', 'Passwords do not match', function (value) {
      const { password } = this.parent;
      return password === value;
    })
      .required('Confirm password is required'),
  });
  return (
    <>
      <Formik
        initialValues={{ firstname: '', lastname: '', email: '', password: '', confirmPassword: '' }}
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
          <form onSubmit={handleSubmit} className='signup-form'>
            <div className='inputs_in_row'>
              <div className='input-in-row'>
                <input
                  className='form-input'
                  placeholder='First Name'
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                />
                <div className={`error ${touched.firstname && errors.firstname && 'shown'}`}>{errors.firstname}</div>
              </div>
              <div className='input-in-row'>
                <input
                  className='form-input'
                  placeholder='Last Name'
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                />
                <div className={`error ${touched.lastname && errors.lastname && 'shown'}`}>{errors.lastname}</div>
              </div>
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
            <div className={`error ${touched.email && errors.email && 'shown'}`}>{errors.email}</div>
            <input
              className='form-input'
              placeholder='Password'
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className={`error ${touched.password && errors.password && 'shown'}`}>{errors.password}</div>
            <input
              className='form-input'
              placeholder='Confirm password'
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <div className={`error ${touched.confirmPassword && errors.confirmPassword && 'shown'}`}>{errors.confirmPassword}</div>
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