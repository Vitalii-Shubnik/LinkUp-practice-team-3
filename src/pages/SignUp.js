import React from 'react'
import '../styles/signup.css'
import { MdOutlineClose } from 'react-icons/md'
import SignUpForm from '../components/SignUpForm'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='main_containter'>
      <div className='block signup_image_block'>

      </div>
      <div className='block signup_form_block'>
        <div className='form_space'>
          <div className='form_header'>
            <div className='form_title'>
              Sign up
            </div>
            <div className='form_subtitle'>
              Just a few quick steps to create your account
            </div>
          </div>
          <SignUpForm />
          <Link style={{ textDecoration: 'none' }} to='/'> 
          {/* change route above to login */}
            <div className='form_footer'>
              Back to
              <span className='form_footer_green'> Login</span>
            </div>
          </Link>
        </div>
      </div>
      <Link className='exit' style={{ textDecoration: 'none' }} to='/'>
        <MdOutlineClose height={12} width={12} color='#313131' />
      </Link>
    </div>
  )
}

export default SignUp