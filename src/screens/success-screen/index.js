import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { userRequest } from '../../utils/requestMethods';
import successImg from "../../assets/vectors/success.jpg"
import "./style.css"

const Success = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    
  //  recieve stripeData and cart data from the payment page
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    setOrderId(id)
  }, [id])
  // const data = location.state.data;
  // const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.userDetials);
  console.log(currentUser)
  
  // useEffect(() => {
  //   const createOrder = async() => {
  //     try {
  //         const res = await userRequest.post("/order", {
  //           userId: currentUser._id,
  //           products: cart.products.map((cartItem) => (
  //             {
  //               productId: cartItem._id,
  //               quantity: cartItem.quantity,
  //             }
  //           )),
  //           amount: cart.total,
  //           address: data.billing_details.address,
  //         });
  //         setOrderId(res.data._id);
  //     } catch (error) {
  //       throw new Error(error)
  //     }
  //   }
  //   data && createOrder();
  // }, [cart, data, currentUser])
   
  return (
    <main className='success-container'>
      <div className='success-img-box'>
        <img src={successImg} alt="success" />
      </div>
      <div className='succes-box'>
      {
        orderId ?
        <h3>Order has been created successfully. Your order number is <span>{orderId}</span>
        </h3> :
        <h3>Successfull. Your order is being prepared...</h3> 
      }
      </div>
     <div className='success-btn-box'>
     <Link to={'/'}>
        <button className='succes-checkout-btn'>CONTINUE SHOPPING</button>
      </Link>
     </div>
    </main>
  )
}

export default Success
