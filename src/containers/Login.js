import React, { Component } from 'react';
import { AuthAPI } from '../api'
import './Login.less'

import { connect } from 'react-redux';
import { getUser, setLoginPending, setLoginSuccess,  setLoginError} from '../actions/actions'; // get the actions

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    const { isLoggedIn } = this.state; // get the current state from the store
    

    const data = new FormData(event.target);
      let user = {
        user_id : data.get('username'),
        password : data.get('password'),
      }
      
      AuthAPI.login(user)
      .then(response => {
          //console.log(response.data)
          if(response.data === true){
            this.props.onLogin(true); // call onLogin() to invoke action
          }
      })
      .catch(error => {
          //console.log(error)
          this.props.onLogin(false); // call onLogin() to invoke action
        });

         
  }

  render() {
    
    return (
      <div className = "login-container">
        <form className = "login" onSubmit={this.handleSubmit}>

          <input id="username" name="username" type="text" placeholder = "Username" required/>
  
          <input id="password" name="password" type="password" placeholder = "Password" required/>

          <input className = "login-btn" type="submit" value="LOGIN" data-test="submit"/>
        </form>

      </div>
    );
  }
}

  const mapStateToProps = state => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn
  });
  
  // dispatch() is the method used to dispatch actions and trigger state changes to the store
  const mapDispatchToProps = dispatch => { 
    return {
      onLogin: (isLoggedIn) => { // onLogin gets called above ^^
        dispatch(setLoginSuccess(isLoggedIn)); // isLoggedIn boolean passed to action
    },

  };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);