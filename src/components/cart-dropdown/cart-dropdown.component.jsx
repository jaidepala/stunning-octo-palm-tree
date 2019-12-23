import React from 'react';

// Stylings
    import './cart-dropdown.styles.scss';

// Components
    import CustomButton from '../custom-button/custom-button.component';
    import CartItem from '../cart-item/cart-item.component';

// Redux
    import { connect } from 'react-redux';
    import { createStructuredSelector } from 'reselect';
    import { toggleCartHidden } from '../../redux/cart/cart.actions';
    import { selectCartItems } from '../../redux/cart/cart.selectors';

// Router 
    import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem 
                            key={ cartItem.id }
                            item={ cartItem }
                        />
                    )) 
                    :
                    (<span className="empty-message">
                        Your cart is empty.
                    </span>)
                }
            </div>
            <CustomButton onClick={ () => { toggleCartHidden(); history.push('/checkout'); } }>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ( state ) => createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( CartDropdown ));
