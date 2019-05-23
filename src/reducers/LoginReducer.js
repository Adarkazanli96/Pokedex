

const initialState = {
    isLoggedIn: false
}

export function loginreducer (state = initialState, action) {
    switch (action.type) {
        
        case 'SET_LOGIN_PENDING':
            return action.payload; //return the new state

        case 'SET_LOGIN_SUCCESS':
            return Object.assign({}, state, {
                isLoggedIn: action.payload
            }); //return the new state

        case 'SET_LOGIN_ERROR':
            return action.payload; //return the new state
            
        default:
            return state; // return the default state
    }
  };

