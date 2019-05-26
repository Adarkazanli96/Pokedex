import React, { Component } from 'react';
import './Login.less'

import { connect } from 'react-redux';
import { userLoginFetch} from '../actions/actions'; // get the actions
import store from '../Store';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  handleSubmit = async (event) => {
    event.preventDefault();    

    const data = new FormData(event.target);
      let user = {
        user_id : data.get('username'),
        password : data.get('password'),
      }
      
        await this.props.userLoginFetch(user);

        console.log("checking if login was successful " + store.getState().reducer.isAuthenticated)

        // authentication was sucessful
        if(JSON.stringify(store.getState().reducer.isAuthenticated)){
          console.log("in login comoponent " + store.getState())
          this.props.history.push("/");
        }
        
        //this.props.location.reload();


        
// wrong username or password
else{
  document.getElementById("login-form").reset();

}
         
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

      userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo)),

  };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);