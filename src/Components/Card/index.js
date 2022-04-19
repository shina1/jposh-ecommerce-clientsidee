// import React from 'react';
// import axios from 'axios';
// import {withRouter} from "react-router-dom";
// import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";

// const Card = () => {
//     const elements = useElements()
//     const stripe = useStripe()
//     const handleSubmit =(e)=> {
//             e.preventDefault()
//             if(!stripe || !elements){
//                 return;
//             }
            
//     }
//   return (
//     <>
//         <h2>Card</h2>
//       <form id='payment-form' onSubmit={handleSubmit}>
//             <label htmlFor='card-element'>Card</label>
//             <CardElement id="card-element"/>
//             <button>Pay</button>
//       </form>
//     </>
//   )
// }

// export default withRouter(Card)
