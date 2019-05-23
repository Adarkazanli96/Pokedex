// set the initial state of the userinfo to {user: "user", password: "password"}

export function userReducer (state = {
  user_id: "user",
  password: "password"
}, action) {
    switch (action.type) {
        
        case 'GET_USER':
            return  {
              
            }
            
        default:
            return state; // return the default state
    }
  };
