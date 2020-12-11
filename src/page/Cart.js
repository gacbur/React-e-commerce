import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import CartProduct from '../components/CartProduct'

const Cart = () => {

    const { cart } = useContext(GlobalContext)

    return (
        <div className="cart">
            {cart.length > 0 ? cart.map(cartProduct => (
                <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
            )) : <div style={{ textAlign: 'center' }}>Cart is empty!</div>}
        </div>
    );
}

export default Cart
