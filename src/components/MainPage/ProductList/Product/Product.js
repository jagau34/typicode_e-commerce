import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className='product-container'>
            <img className='product-image' src={props.data.url} alt="" />
            <input type='button' className='add-cart' onClick={() => props.addProductToCart(props.data.id)} value='Add to Cart'/>
            <p className='product-title'>{props.data.title}</p>
        </div>
    )
}

export default Product;