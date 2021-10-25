import React, { useState } from 'react';
import { CarouselData } from './CarouselData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';


export default function Carousel(){
    const [current, setCurrent] = useState(0)
    const length = CarouselData.length
  
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if(!Array.isArray(CarouselData) || length <= 0) {
        return null
    }

    return (
        <div className='carousel'>
            <FaArrowAltCircleLeft id='left-arrow' onClick={prevSlide} size={40}/>
            <FaArrowAltCircleRight id='right-arrow' onClick={prevSlide} size={40}/>
            {CarouselData.map((slide, index) => {
                return(
                    <div 
                        className={index === current ? 'slide active' : 'slide'} 
                        key={index}
                    >
                        {index === current && (
                            <img 
                                src={slide.image} 
                                alt='cat' 
                                className='images' 
                            />
                        )}   
                    </div>
                )
            })}
        </div>
    )
}