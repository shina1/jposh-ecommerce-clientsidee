import React, { useState } from 'react'
import { Radio, Input, Space } from 'antd';
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'

import "./style.css"
import { useDispatch } from 'react-redux';
import { savePaymentMethod } from '../../actions/cartAction';
import { useNavigate } from 'react-router-dom';

const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState('card')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlePaymentSelect = (e) => {
        e.preventDefault()
        setPaymentMethod(e.target.value)
        if(paymentMethod){
            dispatch(savePaymentMethod(paymentMethod))
        } 
        navigate('/placeoder')
    }
 
  return (
   <main className='payment-method-container'>
       <ResponsiveHeader />
        <div className='payment-method-inner-container'>
            <div className='payment-method-title'><h2>PAYMENT METHOD</h2></div>
            <Radio.Group onChange={handlePaymentSelect} >
                <Space direction="vertical">
                <Radio value={'paypal'}>PayPal</Radio>
                <Radio value={'stripe'}>Stripe</Radio>
                </Space>
            </Radio.Group>
            <button className='payment-method-btn'>Continue</button>
        </div>
   </main>
  )
}

export default PaymentMethod
