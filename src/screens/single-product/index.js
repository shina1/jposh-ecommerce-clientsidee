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
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/cartStore'

const SingleProduct = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        const getProductById = async ()=> {
           try {
                const res = await publicRequest.get(`/products/find/${id}`)
                setProduct(res.data) 
           } catch (error) {
              throw new Error(error)
           }
        }

        getProductById()
    }, [id])


    const handleQuantity = (param) => {
        if(param === "inc"){
            setQuantity(quantity + 1)
        }else{
            quantity > 1 && setQuantity(quantity - 1)
        }
    }
    const openNotificationWithIcon = (type, placement) => {
        // update our cart
        dispatch(addProduct({...product, quantity, color, size}))
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
            </div>
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
                    <button className='add-to-cart' onClick={() => openNotificationWithIcon('success', 'top')}>ADD TO CART</button>
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
