import React from 'react';

// Stylings
    import './cart-item.styles.scss';

// Redux
    import { connect } from 'react-redux';
    import { removeItem, addItem } from '../../redux/cart/cart.actions';

// const CartItem = ({ item: { imageUrl, price, name, quantity, removeItem } }) => {
const CartItem = ({ item, removeItem, addItem }) => {

    const { imageUrl, price, name, quantity } = item;

    return (
        <div className="cart-item">
            <img src={ imageUrl } alt="item" />

            <div className="item-details">
                <span className="name">
                    { name }
                </span>
                <span className="price">
                    {/* { quantity } x ${ price } */}
                    ${ price }
                </span>
                <span className="btn">
                    <span className="minus" onClick={ () => removeItem(item) }>_</span>
                    <span className="qty"> { quantity } </span> 
                    <span className="add" onClick={ () => addItem(item) }>+</span>
                </span>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({

    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
});

export default connect( null, mapDispatchToProps )( CartItem );
