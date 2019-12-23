import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// import sessionStorage from 'redix-persist/lib/storage';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        /*
            !   Ref
            *    
            *   Since user is handled by 
            *   firebase, we do not 
            *    include it.
        */
        'cart'
    ]
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
