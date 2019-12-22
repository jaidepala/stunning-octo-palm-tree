import React from 'react';

// Stylings
    import './cart-dropdown.styles.scss';

// Components
    import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">

            </div>


            <CustomButton>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

export default CartDropdown;
