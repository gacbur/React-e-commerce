import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const EditPanel = ({
    item,
    handleProductIsEdited,
}) => {

    const { handleAddEditedProduct } = useContext(GlobalContext)

    const [values, setValues] = useState({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        description: item.description,
        isEdited: item.isEdited
    })

    const handleChangeValues = (e) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleAddEdit = (e, id) => {

        e.preventDefault()

        const newEditedItem = {
            id: values.id,
            name: values.name,
            image: values.image,
            price: values.price,
            description: values.description,
            isEdited: values.isEdited
        }

        handleAddEditedProduct(newEditedItem, id)
    }

    return (
        <div className="editing-panel">
            <button onClick={() => handleProductIsEdited(item.id)} className="editing-cancel-btn"><FontAwesomeIcon icon={faTimesCircle} /></button>
            <p><strong>EDITING:</strong></p><br />
            <p><strong>Name: </strong>{item.name}</p>
            <p><strong>ID: </strong>{item.id}</p>
            <p><strong>DESCRIPTION: </strong>{item.description}</p>
            <p><strong>PRICE: </strong>{item.price}$</p>
            <p><strong>IMAGE_URL: </strong>{item.image}</p>
            <form onSubmit={(e) => handleAddEdit(e, item.id)}>
                <div className="form-control">
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChangeValues}
                        placeholder="Name"
                        required
                    ></input>
                </div>
                <div className="form-control">
                    <textarea
                        type="text"
                        className="prod-url"
                        name="image"
                        value={values.image}
                        onChange={handleChangeValues}
                        placeholder="Image url"
                        required
                    ></textarea>
                </div>
                <div className="form-control">
                    <input
                        type="number"
                        name="price"
                        value={values.price}
                        onChange={handleChangeValues}
                        placeholder="Price"
                        required
                    ></input>$
                </div>
                <div className="form-control">
                    <textarea
                        className="prod-description"
                        name="description"
                        value={values.description}
                        onChange={handleChangeValues}
                        placeholder="Description"
                        required
                    ></textarea>
                </div>
                <div className="form-control">
                    <button>Edit Product</button>
                </div>
            </form>
        </div >

    )
}

export default EditPanel
