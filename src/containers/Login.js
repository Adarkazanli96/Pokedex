import React, { Component } from 'react';
import { AuthAPI } from '../api'
import './Login.less'

import { connect } from 'react-redux';
import { getUser, setLoginPending, setLoginSuccess,  userLoginFetch, getProfileFetch} from '../actions/actions'; // get the actions

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  handleSubmit = (event) => {
    event.preventDefault();

    const { isLoggedIn } = this.state; // get the current state from the store
    

    const data = new FormData(event.target);
      let user = {
        user_id : data.get('username'),
        password : data.get('password'),
      }
      
        this.props.userLoginFetch(user);
        

        document.getElementById("login-form").reset();
         
  }

  render() {
    
    return (
      <div className = "login-container">
        <form className = "login" id="login-form" onSubmit={this.handleSubmit}>

          <input className = "login-input" id="username" name="username" type="text" placeholder = "Username" required/>
  
          <input className = "login-input" id="password" name="password" type="password" placeholder = "Password" required/>

          <button className = "login-btn" type="submit">LOGIN</button>
        </form>

      </div>
    );
  }
}

// put these in a login container
  const mapStateToProps = state => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn
  });
  
  // dispatch() is the method used to dispatch actions and trigger state changes to the store
  const mapDispatchToProps = dispatch => { 
    return {
      onLogin: (isLoggedIn) => { // onLogin gets called above ^^
        dispatch(setLoginSuccess(isLoggedIn)); // dispatch action to store
      },
      getUser: (userInfo) =>{
        dispatch(getUser(userInfo));
      },

      userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo)),

  };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);