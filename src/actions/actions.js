import { AuthAPI } from '../api'

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

// send user data to backend to be verified
/* localStorage.setItem(“token”, data.jwt) will save the token
(“aaaaaaa.bbbbbbbb.ccccccc”) to our user’s localStorage. This will
be used later when we are persisting a user’s login between sessions. */
export const userPostFetch = user => {
  return dispatch => {
    return AuthAPI.axiosSignup(user)
      //.then(resp => resp.json())
      .then(response => {
        if (response.message) {
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error

          console.log("there was a problem bro")
          
        } else {
          console.log(response.data)
          localStorage.setItem("token", response.data.jwt)
          dispatch(loginUser(response.data.user))
          console.log(">> logging the user data: " + response.data.user);
          console.log(">> logging the json token: " + response.data.jwt)
        }
      })
  }
}

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})


export const userLoginFetch = user => {
  return dispatch => {
    return AuthAPI.axiosLogin(user)
      //.then(resp => resp.json())
      .then(response => {
        if (response.message) {
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error

          console.log("there was a problem bro")
          
        } else {
          console.log(response.data)
          console.log(">> logging the user data for login: " + JSON.stringify(response.data.user));
          console.log(">> logging the json token: " + response.data.jwt)
          localStorage.setItem("token", response.data.jwt)
          dispatch(loginUser(response.data.user))
        }
      })
  }
}


export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return AuthAPI.axiosGetUser()
        .then(response => {
          if (response.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            console.log("in getprofilfetch()" + JSON.stringify(response.data));
            dispatch(loginUser(response.data.user))
          }
        })
    }
  }
}
