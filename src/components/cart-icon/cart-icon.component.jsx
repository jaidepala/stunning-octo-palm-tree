import React from 'react';

// Stylings
    import './cart-icon.styles.scss';
    import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

// Redux
    import { connect } from 'react-redux';
    import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={ toggleCartHidden }>

            <ShoppingIcon className="shopping-icon" />

            <span className="item-count">
                0
            </span>
        </div>
    );    
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)( CartIcon );
