import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from 'react-router-dom';

// Import Pages
	import HomePage from './pages/homepage/homepage.component';
	import ShopPage from './pages/shop/shop.component';
	import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
	import CheckoutPage from './pages/checkout/checkout.component';

// Import Components
	import Header from './components/header/header.component';

// Firebase Utils
	import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Redux
    import { connect } from 'react-redux';
    import { createStructuredSelector } from 'reselect';
	import { setCurrentUser } from './redux/user/user.actions';
	import { selectCurrentUser } from './redux/user/user.selector';

class App extends Component {

	constructor() {

		super();

		this.state = {

			currentUser: null
		};
	};

	unsubscribeFromAuth = null;
	
	componentDidMount() {

		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			
			if(userAuth)
			{
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {

					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});

				});
			};

			// If user data
			// doesn't exist
			setCurrentUser( userAuth );
		});
	};

	componentWillUnmount() {

		// to prevent 
		// memory leaks
		this.unsubscribeFromAuth();
	};

	render() {

		// const { currentUser } = this.state;

		return (
		  <div className="App">
			  <Header />
			  <Switch>
				  <Route exact path="/" component={HomePage} />
				  <Route path="/shop" component={ShopPage} />
				  <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
				  <Route exact path="/checkout" component={CheckoutPage} />
  
			  </Switch>
		  </div>
		);
	};
};

const mapStateToProps = ({ user }) => createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
