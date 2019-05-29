const initialState = {
    darkmode: false
  }

// probably don't need this reducer
export default function reducer(state = initialState, action){
    switch (action.type) {
        
        case 'ACTIVATE_DARKMODE' :
          return{...state, darkmode: action.payload}
            
        default:
            return state; // return the default state
    }
  }

  //export default loginreducer;