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

    const { isLoggedIn } = this.state; // get the old state
    

    const data = new FormData(event.target);
      let user = {
        user_id : data.get('username'),
        password : data.get('password'),
      }
      
      AuthAPI.login(user)
      .then(response => {
          //console.log(response.data)
          if(response.data === true){
            this.props.onLogin(true); // set the new state by calling the onLogin function
          }
      })
      .catch(error => {
          //console.log(error)
          this.props.onLogin(false); // set the new state by calling onLogin () function
        });

         
  }

  render() {
    
    return (
      <div className = "login-container">
        <form className = "login" onSubmit={this.handleSubmit}>

          <input id="username" name="username" type="text" placeholder = "Username" required/>
  
          <input id="password" name="password" type="password" placeholder = "Password" required/>

          <input type="submit" value="LOGIN" data-test="submit"/>
        </form>

      </div>
    );
  }
}

  const mapStateToProps = state => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn
  });
  
  const mapDispatchToProps = dispatch => {
    
    return {
      onLogin: (isLoggedIn) => { // onLogin called from the login compopnent
        dispatch(setLoginSuccess(isLoggedIn));
    },
  };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);