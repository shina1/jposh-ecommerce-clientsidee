import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styledComponents from 'styled-components'
import { login } from '../../actions/userActions'

import './style.css'
const Error = styledComponents.span`
color: red;
`

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const user = useSelector((state) => state.userLogin)
  const {loading, error, userInfo} = user
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  useEffect(() => {
    if(userInfo) {
      navigate(redirect)
    }
  },[navigate, userInfo, redirect])
  return (
    <main className='login-main-cont'>
      <div className='login-title-container'>
          <h2>Welcome</h2>
          <p>Don't have a account? <span><Link to={"/register"}>Sign Up</Link></span></p>
      </div>
      <div className='login-form-container'>
          <form>
              <input type='email' required placeholder='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input type='password' required placeholder='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              {
                (email === '' && password === '') ? <button disabled={true} className='login-sumit-btn'  type='submit' onClick={handleLogin}>Login</button> : <button className='login-sumit-btn'  type='submit' onClick={handleLogin}>Login</button>
              }
              {/* {userState.error && <Error>Something went wrong...</Error>}
               */}
          </form>
      </div>
    </main>
  )
}

export default Login
