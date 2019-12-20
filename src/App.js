import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';

// Import Pages
	import HomePage from './pages/homepage/homepage.component';
	import ShopPage from './pages/shop/shop.component';
	import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Import Components
	import Header from './components/header/header.component';

// Firebase Utils
	import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

	constructor() {

		super();

		this.state = {

			currentUser: null
		};
	};

	unsubscribeFromAuth = null;
	
	componentDidMount() {

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			
			if(userAuth)
			{
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {

					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});

				});
			};

			// If user data
			// doesn't exist
			this.setState({
				currentUser: userAuth
			});
		});
	};

	componentWillUnmount() {

		// to prevent 
		// memory leaks
		this.unsubscribeFromAuth();
	};

	render() {

		const { currentUser } = this.state;

		return (
		  <div className="App">
			  <Header currentUser={ currentUser } />
			  <Switch>
				  <Route exact path="/" component={HomePage} />
				  <Route path="/shop" component={ShopPage} />
				  <Route path="/signin" component={SignInAndSignUp} />
  
			  </Switch>
		  </div>
		);
	};
}

export default App;
