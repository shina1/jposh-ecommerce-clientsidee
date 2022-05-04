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
import SingleProductReviewCarousel from '../../Components/reviewCarousel';
import Message from '../../Components/message/Message';
import Loader from '../../Components/loader/Loader';

const SingleProduct = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2];
    
    
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()
    const  productDetails = useSelector((state) => state.productDetails)
    const cart = useSelector((state) => state.cart)

    
    const {loading, product, error} = productDetails
    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id])
    
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
            duration: 1,
            description:
              'Item added to cart. Proceed to payment or continue shopping!',
          });   
    }
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [id])

  return (
    <div className='single-product-container'>
        {
            error && <Message type={'error'} message={"Failed to load, check your connection!"} />
        }
        {
            loading && <Loader />
        }
        {/* <ResponsiveHeader/> */}
        {
            product ? 
        <section className='single-product-inner-container'>
            <div className='image-cont'>
               {product && <SingleProductReviewCarousel mainImage={product.img} frontImage={product.img} backImage={product.img} /> }
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
                <h2>{product.title}</h2>
                <p>
                    {product.desc}
                </p>
                <h3>£ {product.discount ? product.discoutPrice : product.price}.00</h3>
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
        </section> :
        <Loader />
}
        <Products />
        <Newsletter />
        {/* <Footer /> */}
    </div>
  )
}

export default SingleProduct
