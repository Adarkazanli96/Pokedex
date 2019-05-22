import React from 'react'
import axios from 'axios'

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
      
      
      return axios.post("https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test", JSON.stringify(user))
    }
  
    render() {
      return (
        <div className = "signup">
          <form className = "login-form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" required/>
  
          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" required/>
  
          <label htmlFor="password">Enter a password</label>
          <input id="password" name="password" type="password" required/>
  
          <button>Submit</button>
        </form>
        </div>
      );
    }
  }

  export default SignupForm;