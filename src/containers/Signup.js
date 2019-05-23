import React from 'react'
import { AuthAPI } from '../api'
import "./Signup.less"

class SignupForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();

      const data = new FormData(event.target);
      let user = {
        user_id : data.get('username'),
        password : data.get('password'),
        email: data.get('email')
      }

      AuthAPI.signup(user);
      
    }
  
    render() {
      return (
        <div className = "signup-container">
          <form className = "signup" onSubmit={this.handleSubmit}>
            <input id="username" name="username" type="text" placeholder = "Username" required/>
  
            <input id="email" name="email" type="email" placeholder = "Email" required/>
  
            <input id="password" name="password" type="password" placeholder = "Password" required/>
            <input type="submit" value="SIGNUP" data-test="submit"/>
        </form>
        </div>
      );
    }
  }

  export default SignupForm;