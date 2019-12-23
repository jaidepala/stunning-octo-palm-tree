import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

/*
!	Ref
*   Redux Libraries
*	
*	This provider is a component
*	that is the parent of 
*	everthing inside of our 
*	application.
*	
*	it allows us to get access 
*   to all things related to 
*	the store.
*	path: redux/store.js
*	
*	all of the reducers that 
*	are written will go into the
*	root reducer in 
*	path: redux/root-reducer.js
*	
*/
    import { Provider } from 'react-redux';
    import { store, persistor } from './redux/store';

// Persist
    import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter>
            <PersistGate persistor={ persistor }>

                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
