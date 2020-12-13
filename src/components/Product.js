import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import { Link } from 'react-router-dom'

import ImageSlider from './ImageSlider'

const Product = ({ product }) => {

    const { handleAddToCart } = useContext(GlobalContext)

    return (
        <div className="product">
            <div className="product-image-container">
                <ImageSlider product={product} />
            </div>
            <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>Price: {product.price}$</h4>
                <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                <button className="view-product-btn"><Link to={`/products/${product.id}`}>View Product</Link></button>
            </div>
        </div >
    )
};

export default Product
