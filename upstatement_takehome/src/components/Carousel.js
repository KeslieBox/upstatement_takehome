import React, { useState } from 'react';
import { CarouselData } from './CarouselData';

export default function Carousel(){
    const [current, setCurrent] = useState(0)
    const length = CarouselData.length

    return (
        <div className='carousel'>
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