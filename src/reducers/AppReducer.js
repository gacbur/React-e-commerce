
import * as actionType from '../actions/actionTypes'

export const AppReducer = (state, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            return {
                products: [...state.products.filter(item => item !== action.payload)],
                cart: [...state.cart, action.payload]
            }
        case actionType.REMOVE_FROM_CART:
            return {
                products: [...state.products, action.payload.cartProduct],
                cart: [...state.cart.filter(item => item.id !== action.payload.id)]
            }
        case actionType.ADD_NEW_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case actionType.DELETE_PRODUCT:
            return {
                ...state,
                products: [...state.products.filter(item => item.id !== action.payload)]
            }
        case actionType.SET_EDIT_PRODUCT:
            return {
                ...state,
                products: [...state.products.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item, isEdited: !item.isEdited
                        }
                    } else {
                        return item
                    }
                })]
            }
        case actionType.ADD_EDITED_PRODUCT:
            return {
                ...state,
                products: [...state.products.map(item => (
                    item.id === action.payload.id ? action.payload.newEditedItem : item
                ))]
            }
        default:
            return state;
    }
}
