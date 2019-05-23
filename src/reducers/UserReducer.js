

//this is the reducer, it takes in an action and the current state
const user = (state = {}, action) => {
    switch (action.type) {
      case 'GET_USER':
        return action.payload; //return the new state
      default:
        return state; // return the default state
    }
  };
  
  export default user
