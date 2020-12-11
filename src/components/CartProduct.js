import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const CartProduct = ({ cartProduct }) => {

    const { handleRemoveFromCart } = useContext(GlobalContext)

    return (
        <div className="cart-product">
            <h3>{cartProduct.name}</h3>
            <p>{cartProduct.description}</p>
            <h4>Price: {cartProduct.price}$</h4>
            <button onClick={() => handleRemoveFromCart(cartProduct.id, cartProduct)}>Remove from cart</button>
        </div>
    );
}

export default CartProduct
