// getUser is the action creator
export const getUser = user => ({
  type: 'GET_USER',
  payload: user,
});

export const setLoginPending = isLoginPending => ({
      type: 'SET_LOGIN_PENDING',
      payload: isLoginPending
});

export const setLoginSuccess = isLoginSuccess => ({
    type: 'SET_LOGIN_SUCCESS',
    payload: isLoginSuccess
});
  
export const setLoginError = loginError => ({
    type: 'SET_LOGIN_ERROR',
    payload: loginError
});
  

//the action is 
/* {
  type: 'GET_USER',
  payload: user,
} */