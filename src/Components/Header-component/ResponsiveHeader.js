import React, { useEffect, useState } from 'react'
import { ReactComponent as CloseMenu } from "../../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import  jposhlogo  from "../../assets/images/logo.ico";
import "./resheader.css";
import styledComponents from 'styled-components';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';
import { logout } from "../../actions/userActions"

const { Option } = Select;

const Logo = styledComponents.img``

const ResponsiveHeader = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const cart = useSelector(state => state.cart)
  const user = useSelector((state) => state.userLogin)
  const {userInfo} = user
  const dispatch = useDispatch()

  const [cartQuantity, setCartQuantity] = useState(0)
  useEffect(() => {
    if(cart){
      setCartQuantity(cart.cartItems.length)
    }
  }, [cart])
  const logoutHandler = () => {
    dispatch(logout())
  }
 
  return (
      <div>
    <div className='header-top'>
    <p>Free U.K. Shipping on orders over £199</p>
    </div>
    <div className="header">
        <div className="logo-container">
          <a href="/">
            <Logo src={jposhlogo} alt='jposh logo'className="logo" />
          </a>
        </div>
      <div className="logo-nav">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">HOME</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/categories">CATEGORIES</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/about-us">ABOUT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <li className="option mobile-option">
            <Link to={"/cart"} className="cart-icon">
                <Badge badgeContent={cartQuantity} color="primary">
                    <ShoppingCart />
                </Badge>
            </Link>
          </li>
        </ul>
      </div>
      {/* my-orders */}
      <ul className="signin-up">
        {
            userInfo !== null && (
              userInfo && userInfo.isAdmin === true ? ( <li>
                <Select defaultValue={userInfo.name} style={{ width: 100 }} className="option" >
                  <Option key={1}> <Link to='/admin-home'>Admin</Link></Option>
                  <Option key={3}> <Link to='/my-orders'>My orders</Link></Option>
                  <Option key={2}><button onClick={logoutHandler}>Logout</button></Option>
                </Select>
             </li>) :
              <li className="sign-in">
                <Select defaultValue={userInfo && userInfo.name} style={{ width: 100 }} className="option" >
                  <Option key={4}> <Link to='/my-orders'>My orders</Link></Option>
                  <Option key={5}><button onClick={logoutHandler}>Logout</button></Option>
                </Select>
                {/* <select>
                  <option>{userInfo && userInfo.name}</option>
                  <option><Link to='/my-orders'>My orders</Link></option>
                  <option><button onClick={logoutHandler} to=''>Logout</button></option>
                </select> */}
                
              </li>
            )
        }
        {
         !userInfo && (
          <li className="sign-in" onClick={closeMobileMenu}>
          <Link to={"/login"}>SIGN-IN</Link>
          </li>
         ) 
        }
        
       
      </ul>
      <li style={{listStyleType:'none', margin:'0 5px'}}>
           <Link to={"/cart"} className="cart-bgsc-btn">
              <Badge badgeContent={cartQuantity} color="primary">
                  <ShoppingCart />
              </Badge>
           </Link>
      </li>
      {/* {
            userInfo !== null && (
              userInfo.isAdmin === true ? ( <li className="option" >
                <Select defaultValue={userInfo.name} style={{ width: 100 }} className="option" >
                  <Option key={1}> <Link to='/admin-home'>Admin</Link></Option>
                  <Option key={2}><button onClick={logoutHandler}>Logout</button></Option>
                </Select>
             </li>) :
              <li className="sign-in option">
                <button onClick={logoutHandler} to=''>Logout</button>
              </li>
            )
        }
        {
         !userInfo && (
          <li className="sign-in" onClick={closeMobileMenu}>
          <Link to={"/login"}>SIGN-IN</Link>
          </li>
         ) 
        } */}
     
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
    </div>
  );
  
}

export default ResponsiveHeader


