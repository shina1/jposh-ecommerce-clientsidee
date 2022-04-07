import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Login = () => {
  return (
    <main className='login-main-cont'>
      <div className='login-title-container'>
          <h2>Welcome</h2>
          <p>Don't have a account? <span><Link to={"/register"}>Sign Up</Link></span></p>
      </div>
      <div className='login-form-container'>
          <form>
              <input type='email' required placeholder='email'/>
              <input type='password' required placeholder='password'/>
              <button className='login-sumit-btn' type='submit'>Login</button>
          </form>
      </div>
    </main>
  )
}

export default Login
