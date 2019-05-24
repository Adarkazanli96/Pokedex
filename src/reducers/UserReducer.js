// set the initial state of the userinfo to {user: "user", password: "password"}

export function userReducer (state = {
  user_id: null,
  password: null
}, action) {
    switch (action.type) {
        
        case 'GET_USER':
            return action.payload 
            
        default:
            return state; // return the default state
    }
  };
