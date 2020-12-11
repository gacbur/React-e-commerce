import React, { useState, useContext } from 'react'
import uuid from 'react-uuid'

import { GlobalContext } from '../context/GlobalContext'



const AdminPanel = () => {

    const {
        handleAddToProducts,
        handleDeleteProduct,
        products
    } = useContext(GlobalContext)

    const [values, setValues] = useState({
        name: '',
        price: 0,
        description: ''
    })

    const handleChangeValues = (e) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleAddProduct = (e) => {

        e.preventDefault()

        const newProduct = {
            id: uuid(),
            name: values.name,
            price: values.price,
            description: values.description
        }
        handleAddToProducts(newProduct)
    }

    return (
        <div className="admin-panel">
            <h2 style={{ textAlign: "center", paddingBottom: "1em" }}>Add product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="form-control">
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Name"
                        onChange={handleChangeValues}
                        required
                    ></input>
                </div>
                <div className="form-control">
                    <input
                        type="number"
                        name="price"
                        value={values.price}
                        placeholder="Price"
                        onChange={handleChangeValues}
                        required
                    ></input>$
                </div>
                <div className="form-control">
                    <textarea
                        className="prod-description"
                        name="description"
                        value={values.description}
                        placeholder="Description"
                        onChange={handleChangeValues}
                        required
                    ></textarea>
                </div>
                <div className="form-control">
                    <button >Add Product</button>
                </div>
            </form >
            <div className="manage-products">
                <h2 style={{ textAlign: 'center', padding: '1em 0em' }}>Manage Products</h2>
                {products.map(item => (
                    <div key={item.id}>
                        <div className="product-el">{`NAME: ${item.name} DESCRIPTION: ${item.description.slice(0, 20)}... Price: ${item.price}`}</div>
                        <button onClick={() => handleDeleteProduct(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default AdminPanel
