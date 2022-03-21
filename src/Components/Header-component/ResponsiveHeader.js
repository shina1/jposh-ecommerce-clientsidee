import React, { useState } from 'react'
import { ReactComponent as CloseMenu } from "../../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import  jposhlogo  from "../../assets/images/logo.ico";
import "./resheader.css";
import styledComponents from 'styled-components';

const Logo = styledComponents.img``

const ResponsiveHeader = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
      <div>
    <div className='header-top'>
    <p>Free U.K. Shipping & Free Worldwide shipping on orders over £199</p>
    </div>
    <div className="header">
        <div className="logo-container">
          <a href="#">
            <Logo src={jposhlogo} alt='jposh logo'className="logo" />
          </a>
        </div>
      <div className="logo-nav">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">HOME</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">CATEGORIES</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">ABOUT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">CONTACT</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            SIGN-UP
          </a>
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

