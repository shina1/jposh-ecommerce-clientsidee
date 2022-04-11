import React, { useEffect, useState } from 'react'
import { ReactComponent as CloseMenu } from "../../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import  jposhlogo  from "../../assets/images/logo.ico";
import "./resheader.css";
import styledComponents from 'styled-components';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Logo = styledComponents.img``

const ResponsiveHeader = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const cart = useSelector(state => state.cart)

  const [cartQuantity, setCartQuantity] = useState(0)
  useEffect(() => {
    if(cart){
      setCartQuantity(cart.quantity)
    }
  })
  return (
      <div>
    <div className='header-top'>
    <p>Free U.K. Shipping & Free Worldwide shipping on orders over £199</p>
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
            <a href="#cat">CATEGORIES</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#about">ABOUT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            {/* <a href="/login"></a> */}
            <Link to={"/login"}>SIGN-IN</Link>
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
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
        <Link to={"/login"}>SIGN-IN</Link>
        </li>
        {/* <li onClick={closeMobileMenu}>
          <a href="/cart" className="cart-bgsc-btn">
          <ShoppingCart />
          </a>
        </li> */}
         <li>
           <Link to={"/cart"} className="cart-bgsc-btn">
              <Badge badgeContent={cartQuantity} color="primary">
                  <ShoppingCart />
              </Badge>
           </Link>
      </li>
       
      </ul>
     
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


