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
      document.getElementById("signup-form").reset();
      
    }
  
    render() {
      return (
        <div className = "signup-container">
          <form className = "signup" id = "signup-form" onSubmit={this.handleSubmit}>
            <input className = "signup-input" id="username" name="username" type="text" placeholder = "Username" required/>
  
            <input className = "signup-input" id="email" name="email" type="email" placeholder = "Email" required/>
  
            <input className = "signup-input" id="password" name="password" type="password" placeholder = "Password" required/>
            <button className = "signup-btn" type="submit">SIGNUP</button>

        </form>
        </div>
      );
    }
  }

  export default SignupForm;