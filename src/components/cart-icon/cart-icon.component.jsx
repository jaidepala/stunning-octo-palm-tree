import React from 'react';

// Stylings
    import './cart-icon.styles.scss';
    import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

// Redux
    import { connect } from 'react-redux';
    import { createStructuredSelector } from 'reselect';
    import { toggleCartHidden } from '../../redux/cart/cart.actions';
    import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={ toggleCartHidden }>

            <ShoppingIcon className="shopping-icon" />

            <span className="item-count">
                { itemCount }
            </span>
        </div>
    );    
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ( state ) => createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)( CartIcon );
