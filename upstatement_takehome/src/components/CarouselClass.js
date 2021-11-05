import { Component } from "react"
import { CarouselData } from "./CarouselData"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const length = CarouselData.length

class CarouselClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            current: 0
        }
    }

    setCurrent = (current) => {
        this.setState(prev => {
            return {...prev.current, current}
        })
    }

    // prevSlide = () => {
    //     const current = this.state.current === 0 ? length - 1 : this.state.current - 1
    //     this.setCurrent(current)
    // }

    // nextSlide = () => {
    //     const current = this.state.current === length - 1 ? 0 : this.state.current + 1
    //     this.setCurrent(current)
    // }

    slideTransition = (e) => {
        let current
        if (e.currentTarget.id === 'left-arrow'){
            current = this.state.current === 0 ? length - 1 : this.state.current - 1
        } else if (e.currentTarget.id === 'right-arrow'){
            current = this.state.current === length - 1 ? 0 : this.state.current + 1
        }
        this.setCurrent(current)
    }

    render() {
        return (
            <div className='carousel'>
                <FaArrowAltCircleLeft id='left-arrow' onClick={(e) => this.slideTransition(e)} size={40}/>
                {/* <FaArrowAltCircleLeft id='left-arrow' onClick={(e) => this.prevSlide(e)} size={40}/> */}
                <FaArrowAltCircleRight id='right-arrow' onClick={(e) => this.slideTransition(e)} size={40}/>
                {CarouselData.map(({imageUrl}, index) => {
                    return ( 
                        <div className={index === this.state.current ? 'slide active': 'slide'} key={index}>
                            { index === this.state.current && (
                                <img src={imageUrl} className='images'/>
                            )}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default(CarouselClass)