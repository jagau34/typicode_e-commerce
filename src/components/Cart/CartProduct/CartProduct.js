import React from 'react';
import './CartProduct.css';

const CartProduct = (props) => {
    return (
        <tr className={`cart-product-container ${props.class}`}>
            <td>
                <img className='cart-product-image' src={props.data.url} alt="" />
            </td>
            <td className='cart-product-title-container'>
                <p className='cart-product-title'>{props.data.title}</p>
            </td>
            <td>
                <input
                    type='button'
                    className='remove-cart'
                    onClick={() => props.removeProductFromCart(props.data.id)}
                    value='Remove to cart' />
            </td>
        </tr>
    )
}

export default CartProduct;