/*
!	Ref
*	
*	a reducer is just a function
*	that gets 2 properties.
*	
*	it gets 
*	1. state object:
*	    represents the last state.
*	    or initial object
*	    represents what it is. 
*	
*	2. action:
*	    is just an object that has 
*	    a type that has string value.
*	    eg: { type: '' }
*	
*/

const INITIAL_STATE = {

    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
            // break;
    
        default:
            return state;
    }
};

export default userReducer;
