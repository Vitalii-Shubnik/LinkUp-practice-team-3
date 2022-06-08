import React from 'react'
import '../styles/signup.css'
import {MdOutlineClose} from 'react-icons/md'
import SignUpForm from '../components/SignUpForm'
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
          <div className='form_footer'>
            Back to <span className='form_footer_green'>Login</span>
          </div>
        </div>
      </div>
      <div className='exit'>
        <MdOutlineClose height={12} width={12}/>
      </div>
    </div>
  )
}

export default SignUp