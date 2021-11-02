import React, { useState } from 'react';
import { CarouselData } from './CarouselData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

export default function Carousel(){
    const [current, setCurrent] = useState(0)
    const length = CarouselData.length
  
    // if the prev arrow is clicked & current slide equals 0,
    // set current slide to the last index of CarouselData 
    // otherwise, set current slide to the index of the prev slide
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // if the next arrow is clicked & current slide is equal to the  
    // last index of CarouselData, set current slide to 0 
    // otherwise, set current slide to the prev slide index minus 1
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
            {CarouselData.map((image, index) => {
                return(
                    <div 
                        // if the current index of CarouselData equals the current slide
                        // set the class name to represent the active slide
                        className={index === current ? 'slide active' : 'slide'} 
                        key={index}
                    >
                        {index === current && (
                            <img 
                                src={image.url} 
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