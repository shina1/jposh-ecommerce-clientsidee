import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import "./style.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../Components/message/Message";
import Loader from "../../../Components/loader/Loader";
import { deliverOrder, getOrderDetails } from "../../../actions/orderActions";

 const DashOrderInfo = () => {
     const params = useParams()
     const [status, setStatus] = useState(false)
     
     const dispatch = useDispatch()

     const orderId = params.orderId;
     const orderDetails = useSelector((state) => state.orderDetails)
     const orderDelivery= useSelector((state) => state.orderDelivery)
    const{loading, order} =  orderDetails
    console.log(order)

    

   
     

     useEffect(() => {
         dispatch(getOrderDetails(orderId))
     }, [dispatch, orderId])


     
    //  console.log();
    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(deliverOrder(orderId))
        alert('order has been delivered');
        window.location.reload(false);
    }
    let deliverystatus = order && order.isDelivered;

    useEffect(() => { 
        setStatus(deliverystatus)
    }, [order, deliverystatus])

  return (
   <div>
       <main className="order-dash-container">
           <Sidebar />
       <div className="dash-order">
      <div className="orderTitleContainer">
        <h1 className="orderTitle">Order: {orderId}</h1>
      </div>
      <div className="orderTop">
          {
              order ? 
                 <div className="orderTopLeft">
                    <div className="orderInfoItem">
                       <span className="orderInfoKey">User:</span>
                       <p className="orderInfoValue">{order.user.email}</p>
                   </div>
                   <div className="orderInfoItem">
                       <span className="orderInfoKey">Delivery Status:</span>
                       <p className="orderInfoValue">{status ? <span className="status stat-del">Delivered</span> : <span className="status stat-pending">pending</span>}</p>
                   </div>
                   {/* <div className="orderInfoItem">
                       <span className="orderInfoKey">Delivery Status:</span>
                       <p className="orderInfoValue">{status ? <span className="status stat-del">Delivered</span> : <span className="status stat-pending">pending</span>}</p>
                   </div> */}
                   <div className="update-delievery">
                       <button className="btn-delivered" onClick={handleUpdate}>Mark as Delivered</button>
                   </div>
             </div>
                       :
                   <div className="loader-box">
                       <Loader />
                   </div>
          }
         
        
            <div className="orderTopRight" >
                  
                <div className="orderInfoTop">
                    <h3>Address</h3>    
                </div> 
                  {/* isDelivered */}
                 {
                    order ?
                   <div className="orderInfoBottom">
                   <div className="orderInfoItem">
                       <span className="orderInfoKey">poastal Code: </span>
                       <span className="orderInfoValue">{order.shippingAddress.postalCode} </span>
                   </div>
                   <div className="orderInfoItem">
                       <span className="orderInfoKey">City: </span>
                       <span className="orderInfoValue">{order.shippingAddress.city} </span>
                   </div>
                   <div className="orderInfoItem">
                       <span className="orderInfoKey">Country: </span>
                       <span className="orderInfoValue">{order.shippingAddress.country}</span>
                   </div>
                   <div className="orderInfoItem">
                       <span className="orderInfoKey">Street: </span>
                       <span className="orderInfoValue">{order.shippingAddress.address}</span>
                   </div>
                   <div className="orderInfoItem">
                       <span className="orderInfoKey">Total Price: </span>
                       <span className="orderInfoValue">£ {order.totalPrice}</span>
                   </div>
                   {/* <div className="orderInfoItem">
                       <span className="orderInfoKey">discount:</span>
                       <span className="orderInfoValue"></span>
                   </div>
                   <div className="orderInfoItem">
                       <span className="orderInfoKey">in stock:</span>
                       <span className="orderInfoValue"></span>
                   </div> */}
               </div>
               :
               <div className="loader-box">
                       <Loader />
               </div>
                 }
            </div>
      </div>
      <div className="productBottom">
          <div>
           {
               order ?  order.orderItems.map((item) => (
                <div className='ordeItems' key={item._id}>
                <img src={item.image} alt={item.name} />
                <div><h4>{item.name}</h4></div>
                <div><h4> {`${item.qty} x ${item.price}`} = {item.qty * item.price} </h4></div>
        </div>
               )) 
       :
       <div className="loader-box">
                       <Loader />
               </div>

           }
          </div>
         
      </div>
    </div>
       </main>
   </div>
  );
}

export default DashOrderInfo
