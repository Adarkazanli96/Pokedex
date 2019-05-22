import React, { Component } from 'react';
import axios from 'axios'
import './Login.less'

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      loggedin : false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
      let user = {
        user_id : data.get('username'),
        password : data.get('password'),
      }

      console.log(data.get('username'))
      
      
      return axios.post("https://2awdpfj030.execute-api.us-east-1.amazonaws.com/test", user)
      .then(response => {
          //console.log(response.data)
          this.setState({loggedin : response.data});
      })
      .catch(error => {
          //console.log(error)
          this.setState({loggedin : false});
        });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
    console.log(this.state.loggedin);
    
    return (
      <div className = "login">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" required/>
  
          <label htmlFor="password">Enter a password</label>
          <input id="password" name="password" type="password" required/>

          <input type="submit" value="Log In" data-test="submit"/>
        </form>

      </div>
    );
  }
}

export default LoginPage;