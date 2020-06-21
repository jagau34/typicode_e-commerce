import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/cart.svg';
import search from '../../assets/search.svg';
import user from '../../assets/user.svg';
import logo from '../../assets/logo.svg';
import './Header.css';

// TODO: add react router.
const Logo = () => (
    <div className="logo">
        <Link to="/" ><img className='site-logo' src={logo} alt="" /></Link>
    </div>
)

const HeaderRight = () => (
    <div className="header-right">
        <ul className="header-right-list">
            <li>
                <div className="nav-search search-switch">
                    <img className='header-right-icon' src={search} alt="" />
                </div>
            </li>
            <li><Link to="/cart"><img className='header-right-icon' src={cart} alt="" /></Link> </li>
        </ul>
    </div>
)


const Header = () => (
    <header>
        <div className="menu-wrapper">
            <Logo />
            <HeaderRight />
        </div>
    </header >
);

export default Header;