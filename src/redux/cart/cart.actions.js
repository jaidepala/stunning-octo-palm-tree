import { CartActionTypes }  from './cart.types';

export const toggleCartHidden = cart => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = cartItem => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
});

export const getItem = cart => ({
    type: CartActionTypes.GET_ITEM
});
