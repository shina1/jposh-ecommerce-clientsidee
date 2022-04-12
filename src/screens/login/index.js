import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { login } from '../../store/apiCalls'

import './style.css'
const Error = styledComponents.span`
color: red;
`

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const userState =  useSelector((state) => state.user)
  console.log(userState.isFetching, userState.error)
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, {email, password})
  }
  return (
    <main className='login-main-cont'>
      <div className='login-title-container'>
          <h2>Welcome</h2>
          <p>Don't have a account? <span><Link to={"/register"}>Sign Up</Link></span></p>
      </div>
      <div className='login-form-container'>
          <form>
              <input type='email' required placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
              <input type='password' required placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
              {
                (email === '' && password === '') ? <button disabled={true} className='login-sumit-btn'  type='submit' onClick={handleLogin}>Login</button> : <button className='login-sumit-btn'  type='submit' onClick={handleLogin}>Login</button>
              }
              {userState.error && <Error>Something went wrong...</Error>}
              
          </form>
      </div>
    </main>
  )
}

export default Login
