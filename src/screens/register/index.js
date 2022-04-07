import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Register = () => {
  return (
    <main className='register-main-cont'>
      <div className='title-container'>
          <h2>Create a new account</h2>
          <p>Already have a account? <span><Link to={"/login"}>Login in</Link></span></p>
          
      </div>
      <div className='form-container'>
          <form>
              <input type='text' required  placeholder='first name'/>
              <input type='text' required placeholder='last name'/>
              <input type='email' required placeholder='email'/>
              <input type='password' required placeholder='password'/>
              <input type='password' required placeholder='confirm password'/>
              <span className='agreement'> 
                  By creating an account, I consent to the processing of my personal data in accordance with the <b><Link to={"/privacy"}>PRIVACY POLICY</Link></b>
                  
              </span>
              <button className='register-btn' type='submit'>REGISTER</button>
          </form>
      </div>
    </main>
  )
}

export default Register
