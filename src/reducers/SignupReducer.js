const initialState = {
    currentUser: {},
    isAuthenticated: false
  }
  
  export default function reducer(state = initialState, action) {
      switch (action.type) {
        case 'LOGIN_USER':
          return {...state, currentUser: action.payload}
        case 'SET_AUTHENTICATED' :
          return {...state, isAuthenticated: action.payload}
        default:
          return state;
      }
    }
