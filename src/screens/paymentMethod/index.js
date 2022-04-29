import React, { useState } from 'react'
import { Radio, Input, Space } from 'antd';
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'

import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../actions/cartAction';
import { useNavigate } from 'react-router-dom';

const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState('stripe')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state)=> state.cart)

    if(!cart.shippingAddress){
        navigate('/shiping')
    }
    const handlePaymentSelect = (e) => {
        e.preventDefault()
       
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeoder')
    }
 
  return (
   <main className='payment-method-container'>
       {/* <ResponsiveHeader /> */}
        <div className='payment-method-inner-container'>
            <div className='payment-method-title'><h2>PAYMENT METHOD</h2></div>
            <Radio.Group  defaultValue={'stripe'}>
                <Space direction="vertical">
                {/* <Radio value={'paypal'} onChange={(e)=> setPaymentMethod(e.target.value)}>PayPal</Radio> */}
                <Radio checked value={'stripe'} onChange={(e)=> setPaymentMethod(e.target.value)}>Stripe</Radio>
                </Space>
            </Radio.Group>
            <button className='payment-method-btn' onClick={handlePaymentSelect}>Continue</button>
        </div>
   </main>
  )
}

export default PaymentMethod
