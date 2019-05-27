import React from 'react'
import { AuthAPI } from '../api'
import "./Signup.less"
import { Link } from "react-router-dom";
import Popup from '../components/Popup'


class SignupForm extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      }
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

      let success = null;
      
        await AuthAPI.signup(user)
        .then(response => {
          success = response.data;
          console.log("value of success is now " + success)
        })
        .catch(error => {
          console.log("error in signing up")
        })

        if(success){
          this.props.history.push("/login");
        }
        else{
          this.setState({showPopup: true})
          //document.getElementById("signup-form").reset();
        }
      
    }

    handleDismiss  = () => {
      this.setState({showPopup: false})
    }
  
    render() {
      let popup = <Popup
                    content = {"BOOOOO"}
                    color = {"red"}
                    onClick = {this.handleDismiss}
                    />
      return (
        
        <div>
          
        
        <div className = "signup-container">
        {this.state.showPopup ? popup : null}
          <h2>Register</h2>
          <form className = "signup-form" id = "signup-form" onSubmit={this.handleSubmit}>
            <input className = "signup-input" id="username" name="username" type="text" placeholder = "Username" required/>
  
            <input className = "signup-input" id="email" name="email" type="email" placeholder = "Email" required/>
  
            <input className = "signup-input" id="password" name="password" type="password" placeholder = "Password" required/>
            <button className = "signup-btn" type="submit">Register</button>
            <Link to="/login">Cancel</Link>
        </form>
        </div>
        </div>
      );
    }
  }
  
  
  export default SignupForm;