import { CartActionTypes }  from './cart.types';

export const toggleCartHidden = cart => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = cartItem => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
});

export const removeItem = cartItem => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: cartItem
});
