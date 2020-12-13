import React, { createContext, useReducer } from 'react'

import { AppReducer } from '../reducers/AppReducer'

import uuid from 'react-uuid'

import * as actionType from '../actions/actionTypes'

const initialState = {
    products: [
        {
            id: uuid(),
            name: "Laptop",
            image: ['https://f00.esfr.pl/foto/2/64295345137/589808a04e4e4fc657a3c70faa9445b9/lenovo-laptop-l340-i5-8gb-256ssd-gtx1650-w10_1,64295345137_8.jpg', 'https://f00.esfr.pl/foto/2/64295345137/754a340a5dcac23a40bb39d551217944/lenovo-laptop-l340-i5-8gb-256ssd-gtx1650-w10_1,64295345137_8.jpg', 'https://f00.esfr.pl/foto/2/64295345137/5bf3c286fad0afa1242cb8a7a0c19511/lenovo-laptop-l340-i5-8gb-256ssd-gtx1650-w10_1,64295345137_8.jpg'],
            price: 4500,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nisi animi rem laborum laudantium iure blanditiis quasi facere dolore exercitationem!',
            isEdited: false
        },
        {
            id: uuid(),
            name: "Computer",
            image: ['https://f01.esfr.pl/foto/6/58508711961/fb85d266befbc6aefaddedcc43e96297/activejet-komputer-actina-2600-16-512g-1650-5w-w1,58508711961_8.jpg', 'https://f01.esfr.pl/foto/6/58508711961/799489076f4c4e3ce162a71270dce39c/activejet-komputer-actina-2600-16-512g-1650-5w-w1,58508711961_8.jpg', 'https://f00.esfr.pl/foto/6/58508711961/65c0caba1ff8b3c0256f419b93a46902/activejet-komputer-actina-2600-16-512g-1650-5w-w1,58508711961_8.jpg'],
            price: 3000,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nisi animi rem laborum laudantium iure blanditiis quasi facere dolore exercitationem!',
            isEdited: false
        },
        {
            id: uuid(),
            name: "Smartphone",
            image: ['https://f00.esfr.pl/foto/1/70947525265/65f767cc6c6df4ca3e5463d596392d76/samsung-smartfon-galaxy-m11-niebieski-samsung,70947525265_8.jpg', 'https://f01.esfr.pl/foto/1/70947525265/4cddd05c65366d6e4b58a55558d0abcd/samsung-smartfon-galaxy-m11-niebieski-samsung,70947525265_8.jpg', 'https://f01.esfr.pl/foto/1/70947525265/2d4d1c5b92c04c7901c2f1052fe4d07f/samsung-smartfon-galaxy-m11-niebieski-samsung,70947525265_8.jpg'],
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

    const handleGetRoom = (productPath) => {
        let tempProducts = [...state.products]
        const product = tempProducts.find(product => product.id === productPath)
        return product
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
            handleAddEditedProduct,
            handleGetRoom,
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
