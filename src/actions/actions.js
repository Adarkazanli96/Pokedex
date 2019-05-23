/*  are payloads of information that send data from your application to your store.
They are the only source of information for the store. You send them to the store
using store.dispatch(). */

// Actions only say what happened, not what to do about it

export const getUser = user => ({
  type: 'GET_USER', // Type of action (basically the name of the action)
  payload: user // The payload is the information that gets sent to the store
});

export const setLoginPending = isLoginPending => ({
      type: 'SET_LOGIN_PENDING',
      payload: isLoginPending
});

export const setLoginSuccess = isLoginSuccessBoolean => ({
    type: 'SET_LOGIN_SUCCESS',
    payload: isLoginSuccessBoolean
});
  
export const setLoginError = loginError => ({
    type: 'SET_LOGIN_ERROR',
    payload: loginError
});
  
// getUser is the action creator

//the action is 
/* {
  type: 'GET_USER',
  payload: user,
} */