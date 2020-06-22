import React from 'react';
import './MainPage.css';
import Carousel from './Carousel/Carousel';
import ProductList from './ProductList/ProductList';

const MainPage = (props) => {
    return (
    <div className='mainpage-container'>
        <Carousel />
        <ProductList />
    </div>
    )
}

export default MainPage;