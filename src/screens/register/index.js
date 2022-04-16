import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Message from "../../Components/message/Message";
import Loader from "../../Components/loader/Loader";
import {register} from "../../actions/userActions";

import './style.css'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userRegister = useSelector((state) => state.userRegister)
  const {loading, error, userInfo} = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'
  

  useEffect(() => {
    if(userInfo){
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }
  return (
    <main className='register-main-cont'>
      <div className='title-container'>
          <h2>Create a new account</h2>
          <p>Already have a account? <span><Link to={"/login"}>Login in</Link></span></p>
          
      </div>
      {
        message && <Message variant='danger'> {message}</Message>
      }
      {
        error && <Message variant='danger'>{error}</Message>
      }
      {loading && <Loader />}
      <div className='form-container'>
          <form onSubmit={submitHandler}>
              <input type='text' required  placeholder='fullname' value={name} onChange={(e) => setName(e.target.value)}/>
              {/* <input type='text' required placeholder='last name' value={email}/> */}
              <input type='email' required placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input type='password' required placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <input type='password' required placeholder='confirm password'value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}/>
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
