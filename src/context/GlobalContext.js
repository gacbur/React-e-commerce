import React, { createContext, useReducer } from 'react'

import { AppReducer } from '../reducers/AppReducer'

import uuid from 'react-uuid'

import * as actionType from '../actions/actionTypes'

import computer from '../images/computer.jpg'
import laptop from '../images/laptop.jpg'
import smartphone from '../images/smartphone.jpg'

const initialState = {
    products: [
        {
            id: uuid(),
            name: "Laptop",
            image: laptop,
            price: 4500,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nisi animi rem laborum laudantium iure blanditiis quasi facere dolore exercitationem!',
            isEdited: false
        },
        {
            id: uuid(),
            name: "Computer",
            image: computer,
            price: 3000,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nisi animi rem laborum laudantium iure blanditiis quasi facere dolore exercitationem!',
            isEdited: false
        },
        {
            id: uuid(),
            name: "Smartphone",
            image: smartphone,
            price: 600,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nisi animi rem laborum laudantium iure blanditiis quasi facere dolore exercitationem!',
            isEdited: false
        }
    ],
    cart: []
}

export const GlobalContext = createContext()

export const GlobalContextProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const handleAddToCart = (product) => {
        dispatch({ type: actionType.ADD_TO_CART, payload: product })
    }

    const handleRemoveFromCart = (id, cartProduct) => {
        dispatch({
            type: actionType.REMOVE_FROM_CART, payload: {
                id,
                cartProduct
            }
        })
    }

    const handleAddToProducts = (newProduct) => {
        dispatch({
            type: actionType.ADD_NEW_PRODUCT, payload: newProduct
        })
    }

    const handleDeleteProduct = (id) => {
        dispatch({
            type: actionType.DELETE_PRODUCT, payload: id
        })
    }

    const handleProductIsEdited = (id) => {
        dispatch({
            type: actionType.SET_EDIT_PRODUCT, payload: id
        })
    }

    const handleAddEditedProduct = (newEditedItem, id) => {
        dispatch({
            type: actionType.ADD_EDITED_PRODUCT,
            payload: {
                newEditedItem: newEditedItem,
                id: id
            }
        })
    }

    return (
        <GlobalContext.Provider value={{
            products: state.products,
            cart: state.cart,
            handleAddToCart,
            handleRemoveFromCart,
            handleAddToProducts,
            handleDeleteProduct,
            handleProductIsEdited,
            handleAddEditedProduct
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
