/*
!	Ref
*   	
*	Cart item should be added when 
*   it doesn't exist...
*   
*   if it exists, then its count 
*   should be updated.
*   
*/
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem)
    {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    };

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingCartItem)
    {
        if(existingCartItem.quantity && existingCartItem.quantity === 1)
        {
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToRemove.id ?
                {  ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            ).filter(cartItem => cartItem.quantity > 0);
        }
        else
        {
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToRemove.id ?
                {  ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            );
        }

    };

    return [ ...cartItems, { ...cartItemToRemove, quantity: 0 } ];
};
