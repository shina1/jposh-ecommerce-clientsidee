import React from 'react'

import './style.css'

const Register = () => {
  return (
    <main>
      <div className='title-container'>
          <h2>Create a new account</h2>
          <p>Already have a account? <span><a>Login in</a></span></p>
      </div>
      <div className='form-container'>
          <form>
              <input type='text' required  placeholder='first name'/>
              <input type='text' required placeholder='last name'/>
              <input type='email' required placeholder='email'/>
              <input type='password' required placeholder='password'/>
              <input type='password' required placeholder='confirm password'/>
              <span className='agreement'> 
                  By creating an account, I consent to the processing of my personal data in accordance with the <b><a>PRIVACY POLICY</a></b>
              </span>
              <button className='register-btn' type='submit'>REGISTER</button>
          </form>
      </div>
    </main>
  )
}

export default Register
