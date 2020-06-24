import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from '../../actions/productsAction';
import img from '../../assets/about_hero.png';
import './Cart.css';
import CartProduct from './CartProduct/CartProduct';

class Cart extends Component {
    componentDidMount = () => {
        if (!this.props.cartReducer.products.length) return;
        this.props.productsActions.getListByIds(this.props.cartReducer.products);
    }

    removeProductFromCart = (productId) => {
        this.props.productsActions.remove(productId);
    }
    render() {
        const { productDatas } = this.props.cartReducer
        const cartHeader = (
            <div className='cart-header-container'>
                <h1 className='cart-title'>Cart List</h1>
                <img src={img} className='cart-header-image' />
            </div>
        )
        let productList = [];
        productList = productDatas.map((product, index) => {
            if (!index)
                return <div className='first-cart-product'><CartProduct data={product} removeProductFromCart={this.removeProductFromCart} /></div>
            return <div className='cart-product'><CartProduct data={product} removeProductFromCart={this.removeProductFromCart} /></div>
        })
        return (
            <div>
                {cartHeader}
                <table className='table-container'>
                    {productList}
                </table>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    productsActions: bindActionCreators(productsActions, dispatch)
})

const mapStateToProps = (state) => ({
    cartReducer: state.cartReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);