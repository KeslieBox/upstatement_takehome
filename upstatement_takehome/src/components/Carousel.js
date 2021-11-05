import React, { useState } from 'react';
import { CarouselData } from './CarouselData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

export default function Carousel(){
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = CarouselData.length
  
    // if the left arrow is clicked & current slide index equals 0,
    // set current slide to the last index of CarouselData 
    // otherwise, set current slide to the index of the prev slide
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }

    // if the right arrow is clicked & current slide index is equal to the  
    // last index of CarouselData, set current slide to 0 
    // otherwise, set current slide to the prev slide index plus 1
    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    if(!Array.isArray(CarouselData) || length <= 0) {
        return null
    }

    return (
        <div className='carousel'>
            <FaArrowAltCircleLeft id='left-arrow' onClick={prevSlide} size={40}/>
            <FaArrowAltCircleRight id='right-arrow' onClick={nextSlide} size={40}/>
            {CarouselData.map(({imageUrl}, index) => {
                return(
                    <div 
                        // if the current index of the CarouselData array equals the current slide's index
                        // set the class name to represent the active slide, otherwise set to not active
                        className={index === currentSlide ? 'slide active' : 'slide'} 
                        key={index}
                    >
                        {index === currentSlide && (
                            <img 
                                src={imageUrl} 
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