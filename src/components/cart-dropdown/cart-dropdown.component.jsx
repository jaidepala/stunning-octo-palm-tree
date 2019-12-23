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

const CartDropdown = ({ cartItems, dispatch, history }) => {
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
            <CustomButton onClick={ () => { dispatch(toggleCartHidden()); history.push('/checkout'); } }>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

/*
!	Ref
*	
*	Dispatch action shorthand
*   
*   connect passes dispatch into
*   our components as a prop if
*   we do not supply a second
*   argument to connect.
*   
*   if we need to make one off 
*   action dispatches, there's
*   no reason to write another
*   mapDispatchToProps, as it
*   might be more verbose.
*   
*/

const mapStateToProps = ( state ) => createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect( mapStateToProps )( CartDropdown ));
