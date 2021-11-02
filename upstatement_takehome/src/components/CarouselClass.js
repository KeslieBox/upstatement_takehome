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

    prevSlide = () => {
        const current = this.state.current === 0 ? length - 1 : this.state.current - 1
        this.setState({current})
    }

    nextSlide = () => {
        const current = this.state.current === length - 1 ? 0 : this.state.current + 1
        this.setState({current})
    }

    render() {
        return (
            <div className='carousel'>
                <FaArrowAltCircleLeft id='left-arrow' onClick={() => this.prevSlide()} size={40}/>
                <FaArrowAltCircleRight id='right-arrow' onClick={() => this.nextSlide()} size={40}/>
                {CarouselData.map((image, index) => {
                    return ( 
                        <div className={index === this.state.current ? 'slide active': 'slide'} key={index}>
                            { index === this.state.current && (
                                <img src={image.url} className='images'/>
                            )}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default(CarouselClass)