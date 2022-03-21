import { ShoppingCart } from '@material-ui/icons';
import { Badge } from 'antd';
import React, { useState } from 'react'
import logo from '../../assets/images/logo.ico'
import './header.css'


const HeaderRes = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };

  return (
    <header className='header-wrapper'>
         <div className='header-top'>
                <p>Free U.K. Shipping & Free Worldwide shipping on orders over £199</p>
        </div>
        <nav className="nav">
      <div  className="logo">
        <img src={logo} alt='logo'/>
      </div>
      <ul className={active}>
        <li className="nav__item">
          <a href="#h" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#w" className="nav__link">
          Categories
          </a>
        </li>
        <li className="nav__item">
          <a href="#a" className="nav__link">
          Accesories
          </a>
        </li>
        <li className="nav__item">
          <a href="#f" className="nav__link">
          About
          </a>
        </li>
        <li className="nav__item">
          <a href="#e" className="nav__link">
          Contact
          </a>
        </li>
      </ul>
      <div className='menu-group-right'>
            <span>REGISTER</span>
            <span>SIGN IN</span>
            <Badge badgeContent={4} color="primary">
                    <ShoppingCart />
            </Badge>
        </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    </header>
  )
}

export default HeaderRes
