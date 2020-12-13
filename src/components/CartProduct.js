import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'



const CartProduct = ({ cartProduct }) => {

    const { handleRemoveFromCart } = useContext(GlobalContext)

    return (
        <div className="cart-product">
            <div className="cart-product-img-container">
                <img src={cartProduct.image[0]} alt={`${cartProduct.name}`}></img>
            </div>
            <div className="cart-product-content">
                <h3>{cartProduct.name}</h3>
                <p>{cartProduct.description}</p>
                <h4>Price: {cartProduct.price}$</h4>
                <button onClick={() => handleRemoveFromCart(cartProduct.id, cartProduct)}>Remove from cart</button>
            </div>
        </div>
    );
}

export default CartProduct
