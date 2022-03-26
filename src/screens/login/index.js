import React from 'react'

import './style.css'

const Login = () => {
  return (
    <main>
      <div className='title-container'>
          <h2>Welcome</h2>
          <p>Don't have a account? <span><a>Sign Up</a></span></p>
      </div>
      <div className='form-container'>
          <form>
              <input type='email' required placeholder='email'/>
              <input type='password' required placeholder='password'/>
              <button className='register-btn' type='submit'>REGISTER</button>
          </form>
      </div>
    </main>
  )
}

export default Login
