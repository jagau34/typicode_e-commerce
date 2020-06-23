import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/cart.svg';
import search from '../../assets/search.svg';
import logo from '../../assets/logo.svg';
import './Header.css';
import { connect } from 'react-redux';

// TODO: add react router.
const Logo = () => (
    <div className="logo">
        <Link to="/" ><img className='site-logo' src={logo} alt="" /></Link>
    </div>
)

const HeaderRight = (props) => {
    const numberProductInCart = props.cartReducer.products.length
    
    return (
        <div className="header-right">
            <ul className="header-right-list">
                <li>
                    <div className="nav-search search-switch">
                        <img className='header-right-icon-search' src={search} alt="" />
                    </div>
                </li>
                <li><Link className='header-cart-container' to="/cart">{numberProductInCart}<img className='header-right-icon-cart' src={cart} alt="" /></Link> </li>
            </ul>
        </div>
    )
}


const Header = (props) => (
    <header>
        <div className="menu-wrapper">
            <Logo />
            <HeaderRight {...props} />
        </div>
    </header >
);

const mapStateToProps = (state) => ({
    cartReducer: state.cartReducer
});

export default connect(mapStateToProps)(Header);