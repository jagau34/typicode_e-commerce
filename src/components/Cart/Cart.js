import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from '../../actions/productsAction';
import img from '../../assets/about_hero.png';
import './Cart.css';

class Cart extends Component {
    componentDidMount = () => {
        if (!this.props.cartReducer.products.length) return;
        this.props.productsActions.getListByIds(this.props.cartReducer.products);
    }
    render() {
        return <div className='cart-header-container'>
            <h1 className='cart-title'>Cart List</h1>
            <img src={img} className='cart-header-image' />
            
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    productsActions: bindActionCreators(productsActions, dispatch)
})

const mapStateToProps = (state) => ({
    cartReducer: state.cartReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);