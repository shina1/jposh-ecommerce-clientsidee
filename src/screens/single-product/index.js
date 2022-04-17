import React, { useEffect, useState } from 'react'
import { notification, Space } from 'antd';
import Footer from '../../Components/Footer'
import ResponsiveHeader from '../../Components/Header-component/ResponsiveHeader'
import Newsletter from '../../Components/Newsletter'
import Products from '../../Components/Product/Products'
import './style.css'

import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../utils/requestMethods'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../store/cartStore'
import { listProductDetails } from '../../actions/productActions';
import { addToCart } from '../../actions/cartAction';

const SingleProduct = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2];
    
    
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()
    const  productDetails = useSelector((state) => state.productDetails)
    const cart = useSelector((state) => state.cart)

    console.log(cart.cartItems);
    
    const {loading, product, error} = productDetails
    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch])
    
    const handleQuantity = (param) => {
        if(param === "inc"){
            setQuantity(quantity + 1)
        }else{
            quantity > 1 && setQuantity(quantity - 1)
        }
    }

    const openNotificationWithIcon = (type, placement) => {
      
        dispatch(addToCart(id, quantity, color, size))
        // open notification
        notification[type]({
            message: 'SUCCCESS',
            duration: 2,
            description:
              'Item added to cart. Proceed to payment or continue shopping!',
          });   
    }

  return (
    <div className='single-product-container'>
        <ResponsiveHeader/>
        <section className='single-product-inner-container'>
            <div className='image-cont'>
                <img src={product.img} alt='single product'/>
                {
                    product.video && 
                    <video controls autoPlay={true} muted playsInline >
                    <source src={product.video} />
                </video>

                }
            </div>
            {/* <div className='video-box'>
               
            </div> */}
            <div className='product-desc'>
                <h3>{product.title}</h3>
                <p>
                    {product.desc}
                </p>
                <span>£ {product.price}</span>
                <div className='filter-cotainer'>
                    <div className='color-filter filter-box'>
                        <select onChange={(e) => setColor(e.target.value)}>
                            <option disabled selected>color</option>
                            {
                                product.color && product.color.map((el) => (
                                    <option value={el} key={el}>{el}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='size-filter filter-box'>
                        <select onChange={(e) => setSize(e.target.value)}>
                            <option disabled selected>Size</option>
                            {
                                product.size && product.size.map((el) => (
                                    <option value={el} key={el}>{el}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='addContainer'>
                    <div className='amount-container'>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                        <span className='amount'>{quantity}</span>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </div>
                    <button className='add-to-cart' onClick={() => openNotificationWithIcon('success', 'top')} >ADD TO CART</button>
                </div>
            </div>
        </section>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default SingleProduct
