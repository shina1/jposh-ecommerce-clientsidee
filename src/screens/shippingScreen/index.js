import React, { useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../actions/cartAction';

const Shipping = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const shippingAddress = cart.shippingAddress

    const [address, setAddress] = useState(shippingAddress.address || '')
    const [city, setCity] = useState(shippingAddress.city || '')
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '')
    const [country, setCountry] = useState(shippingAddress.country || '')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))
    
        navigate('/payment')
    }
  return (
    <main className='shipping-container'>
        {/* <ResponsiveHeader /> */}
        <div className='shipping-inner-container'>
            <div className='shipping-cont-title'><h2>SHIPPING</h2></div>
            <div className='shipping-form-cont'>
                <form onSubmit={handleSubmit}>
                    <div className='shipping-form-item'>
                        <label>Address</label>
                        <input type='text' name='address' placeholder='Enter your address' value={address} required onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div className='shipping-form-item'>
                        <label>City</label>
                        <input type='text' name='city' value={city} placeholder='Enter city' required onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className='shipping-form-item'>
                        <label>Postal Code</label>
                        <input type='text' name='postalcode' value={postalCode} placeholder='Enter Postal Code' required onChange={(e) => setPostalCode(e.target.value)}/>
                    </div>
                    <div className='shipping-form-item'>
                        <label>Country</label>
                        <input type='text' name='country' value={country} placeholder='Enter country' required onChange={(e) => setCountry(e.target.value)}/>
                    </div>

                    <button className='shipping-btn'>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Shipping
