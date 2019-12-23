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

export const subtractItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity && existingCartItem.quantity === 1)
    {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {  ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};
