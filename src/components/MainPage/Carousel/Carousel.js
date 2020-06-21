import React from 'react';
import { Carousel as ResponsiveCarousel} from 'react-responsive-carousel';
import image1 from '../../../assets/image1.JPEG';
import image2 from '../../../assets/image2.jpg';
import image3 from '../../../assets/image3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';

const Carousel = () => (
    <div className='carousel-container'>
    <ResponsiveCarousel autoPlay renderThumbs={() =>false}>
        <div className='image-container'>
            <img className='image' src={image1} alt=""/>
            <h1 className="legend">Select Your new perfect style</h1>
        </div>
        <div className='image-container'>
            <img className='image' src={image2} alt=""/>
            <h1 className="legend">Select Your new perfect style</h1>
        </div>
        <div className='image-container'>
            <img className='image' src={image3} alt=""/>
            <h1 className="legend">Select Your new perfect style</h1>
        </div>
    </ResponsiveCarousel>
    </div>
)

export default Carousel;