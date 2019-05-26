import React from 'react'
import { AuthAPI } from '../api'
import {userPostFetch} from '../actions/actions'
import { connect } from 'react-redux';
import "./Signup.less"
import { Link } from "react-router-dom";
import store from '../Store'


class SignupForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async (event) => {
      event.preventDefault();

      const data = new FormData(event.target);
      let user = {
        user_id : data.get('username'),
        password : data.get('password'),
        email: data.get('email')
      }
      
        await this.props.userPostFetch(user);

        console.log("checking if login was successful " + store.getState().reducer.isAuthenticated)

        let isAuth = store.getState().reducer.isAuthenticated;

        // authentication was sucessful
        if(isAuth){
          this.props.history.push("/");
        }

      // wrong username or password
      else if(!isAuth){
        console.log("about to clear the login form")
        document.getElementById("signup-form").reset();

      }
      
    }
  
    render() {
      return (
        <div className = "signup-container">
          <h2>Register</h2>
          <form className = "signup-form" id = "signup-form" onSubmit={this.handleSubmit}>
            <input className = "signup-input" id="username" name="username" type="text" placeholder = "Username" required/>
  
            <input className = "signup-input" id="email" name="email" type="email" placeholder = "Email" required/>
  
            <input className = "signup-input" id="password" name="password" type="password" placeholder = "Password" required/>
            <button className = "signup-btn" type="submit">Register</button>
            <Link to="/login">Cancel</Link>
        </form>
        </div>
      );
    }
  }
  

  const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
  })
  
  export default connect(null, mapDispatchToProps)(SignupForm);