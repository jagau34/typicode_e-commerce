import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className='product-container'>
            <img className='product-image' src={props.data.url} alt="" />
            <p className='add-cart'>Add to Cart</p>
            <p className='product-title'>{props.data.title}</p>
        </div>
    )
}

export default Product;