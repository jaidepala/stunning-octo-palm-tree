import { CartActionTypes } from './cart.types';
import { addItemToCart, subtractItemFromCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            
            return {
                ...state,
                hidden: !state.hidden
            };
            
        case CartActionTypes.ADD_ITEM:

            return {
                ...state,
                cartItems: addItemToCart( state.cartItems, action.payload )
            };

        case CartActionTypes.SUBTRACT_ITEM:

            return {
                ...state,
                cartItems: subtractItemFromCart( state.cartItems, action.payload )
            };

        case CartActionTypes.REMOVE_ITEM:

            return {
                ...state,
                cartItems: removeItemFromCart( state.cartItems, action.payload )
            };

        case CartActionTypes.GET_ITEM:

            return {
                ...state
            };

        default:
            return state;
    }
};

export default cartReducer; 
