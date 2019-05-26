// probably don't need this reducer
export const loginreducer = (state = false, action) => {
    switch (action.type) {
        
        case 'SET_LOGIN_PENDING':
            return action.payload; //return the new state

        case 'SET_LOGIN_SUCCESS':
            return action.payload // return the new state

        case 'SET_LOGIN_ERROR':
            return action.payload; //return the new state
            
        default:
            return state; // return the default state
    }
  }

  //export default loginreducer;