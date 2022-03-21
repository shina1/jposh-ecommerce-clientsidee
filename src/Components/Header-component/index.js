import { Badge } from '@material-ui/core'
import { Menu, Search, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import logo from '../../assets/images/logo.ico'
import './style.css'
const Header = () => {
  return (
    <header>
        <div className='header-container'>
            <div className='header-top'>
                <p>Free U.K. Shipping & Free Worldwide shipping on orders over £199</p>
            </div>
            <div className='header-bottom'>
                <div className='logo'>
                    <img src={logo} alt='jposh-logo' className='image-responsive' />
                </div>
                <nav className='nav-bar-wrapper'>
                    <ul>
                        <li>Home</li>
                        <li>Categories</li>
                        <li>Accesories</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className='menu-group'>
                    <div className='search-container'>
                        <input />
                        <Search />
                    </div>
                    <div className='menu-group-right'>
                            <span>REGISTER</span>
                            <span>SIGN IN</span>
                            <Badge badgeContent={4} color="primary">
                                 <ShoppingCart />
                             </Badge>
                    </div>
                </div>
                <div className='burger'>
                   
                    <Menu />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
