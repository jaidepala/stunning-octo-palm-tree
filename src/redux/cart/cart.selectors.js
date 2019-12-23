/*
!	Ref
*	
*	Selectors can compute derived data, allowing Redux to store the minimal possible state.
*   Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
*   Selectors are composable. They can be used as input to other selectors.
*   
*   https://www.npmjs.com/package/reselect
*   
*/

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [ selectCart ],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [ selectCart ],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [ selectCartItems ],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);
