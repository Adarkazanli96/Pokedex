const initialState = {
    currentUser: {},
    isAuthenticated: null
  }
  
  export default function reducer(state = initialState, action) {
      switch (action.type) {
        case 'LOGIN_USER':
          return {...state, currentUser: action.payload}
        case 'LOGOUT_USER':
          return{...state,currentUser: {}}
        case 'SET_AUTHENTICATED' :
          return {...state, isAuthenticated: action.payload}
        default:
          return state;
      }
    }
