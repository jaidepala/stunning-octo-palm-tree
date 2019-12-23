import React from 'react';

// Stylings
    import './checkout-item.styles.scss';

// Redux
    import { connect } from 'react-redux';
    import { createStructuredSelector } from 'reselect';
    import { removeItem } from '../../redux/cart/cart.actions';
    

const CheckoutItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;
    
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img 
                    src={ imageUrl }
                    alt="items"
                />
            </div>
            <span className="name">
                { name }
            </span>
            <span className="quantity">
                { quantity }
            </span>
            <span className="price">
                { price }
            </span>
            <div className="remove-button" onClick={ () => removeItem() }>
                &#10005;
            </div>
        </div>
    );
};

// const mapDispatchToProps = createStructuredSelector({
//     removeItem: item => dispatch(removeItem(item)),
// });

// export default connect( null, mapDispatchToProps )( CheckoutItem );
export default CheckoutItem;
