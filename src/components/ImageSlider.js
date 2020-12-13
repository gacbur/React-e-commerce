import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = ({ product }) => {

    const [index, setIndex] = useState(0)

    const handleSlideRight = () => {

        if (index !== product.image.length - 1) {
            setIndex(prevState => prevState + 1)
        }
        else {
            setIndex(0)
        }
    }

    const handleSlideLeft = () => {
        if (index > 0) {
            setIndex(prevState => prevState - 1)
        } else {
            setIndex(product.image.length - 1)
        }
    }

    return (
        <div className="image-slider">
            <button onClick={handleSlideLeft} className="slider-btn-left"><FontAwesomeIcon icon={faChevronLeft} /></button>
            <img src={product.image[index]} alt={`${product.name}`} />
            <button onClick={handleSlideRight} className="slider-btn-right"><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    )
}

export default ImageSlider
