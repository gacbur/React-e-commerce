import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalContext'

const SingleProduct = (props) => {

    const { handleGetRoom } = useContext(GlobalContext)

    const [SingleProduct, setSingleProduct] = useState(props.match.params.SingleProduct)

    const product = handleGetRoom(SingleProduct)

    if (!product) {
        return <div className="error">
            <h3>no such room could be found...</h3>
            <Link to="/products">Back to Products</Link>
        </div>
    }
    else {
        return (
            <div className='single-product'>
                <p>{product.name}</p>
            </div>
        )
    }


}

export default SingleProduct
