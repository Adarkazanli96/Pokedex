// set the initial state of the userinfo to {user: "user", password: "password"}
// probably don't need this reducer
export function userReducer (state = {
  user_id: null,
  password: null
}, action) {
    switch (action.type) {
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
      case 'LOGOUT_USER':
        return {...state, currentUser: {} }
      default:
        return state;
    }
  };
