import React, { createContext, useReducer } from 'react'

import { AppReducer } from '../reducers/AppReducer'

import * as actionType from '../actions/actionTypes'

import uuid from 'react-uuid'

const initialState = {
    products: [
        {
            id: uuid(),
            name: "Laptop",
            price: 4500,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nisi animi rem laborum laudantium iure blanditiis quasi facere dolore exercitationem!'
        },
        {
            id: uuid(),
            name: "Computer",
            price: 3000,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nisi animi rem laborum laudantium iure blanditiis quasi facere dolore exercitationem!'
        },
        {
            id: uuid(),
            name: "Smartphone",
            price: 600,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nisi animi rem laborum laudantium iure blanditiis quasi facere dolore exercitationem!'
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


    return (
        <GlobalContext.Provider value={{
            products: state.products,
            cart: state.cart,
            handleAddToCart,
            handleRemoveFromCart,
            handleAddToProducts,
            handleDeleteProduct
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
