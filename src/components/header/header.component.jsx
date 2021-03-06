import React from 'react';

import { Link } from 'react-router-dom';

// Stylings
    import './header.styles.scss';
    import { ReactComponent as Logo } from '../../assets/images/crown.svg';
    import CartIcon from '../cart-icon/cart-icon.component';
    import CartDropDown from '../cart-dropdown/cart-dropdown.component';

// Firebase
    import { auth } from '../../firebase/firebase.utils';

/*
!	Ref
*	
*	Connect is a higher order component,
*	that lets us modify our component
*	to have access to things related
*	to redux.
*	
*	HOCs are funtions take component
*   as arguemnts and then return a 
*	new suped up component.
*/
// Redux
    import { connect } from 'react-redux';
    import { createStructuredSelector } from 'reselect';
    import { selectCartHidden } from '../../redux/cart/cart.selectors';
    import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    ( <div className="option" onClick={ () => auth.signOut() }>SIGN OUT</div> )
                    :
                    ( <Link className="option" to="/signin">SIGN IN</Link> )
                }
                <CartIcon />
            </div>
            {
                hidden ? null : (<CartDropDown />)
            }
        </div>
    );
};

const mapStateToProps = (state) => createStructuredSelector({

    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
