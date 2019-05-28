import React from 'react'
import { AuthAPI } from '../api'
import "./Signup.less"
import { Link } from "react-router-dom";
import Popup from '../components/Popup'
import axios from 'axios';


class SignupForm extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false,
        error: false
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
          this.setState({
            showPopup : true,
            error: false
          })
          document.getElementById("signup-form").reset();

        }
        else{
          this.setState({
            showPopup: true,
            error: true
          })
          }
      
    }

    componentDidMount(){
      axios.get("https://nekftwauae.execute-api.us-east-1.amazonaws.com/test")
      .then(response => console.log(response));
    }
  
    render() {
      axios.get("https://nekftwauae.execute-api.us-east-1.amazonaws.com/test")
      .then(response => console.log(response));
      let popup;
      
      if(!this.state.error){
        popup = <Popup
          content = {"Registration successful"}
          color = {"green"}
          />
      }
      else{
        popup = <Popup
                    content = {"An account with this username already exists"}
                    color = {"red"}
                    />
      }
      
      

      return (
        
        <div className = "signup-bg">
        <div className = "signup-container">
        {this.state.showPopup ? popup : null}
          <h2 style = {{color:"white", textAlign: "center"}}>Register</h2>
          <form className = "signup-form" id = "signup-form" onSubmit={this.handleSubmit}>
            <input className = "signup-input" id="username" name="username" type="text" placeholder = "Username" required/>
  
            <input className = "signup-input" id="email" name="email" type="email" placeholder = "Email" required/>
  
            <input className = "signup-input" id="password" name="password" type="password" placeholder = "Password" required/>
            <button className = "signup-btn" type="submit">Register</button>
            <span style = {{color:"white"}}>{"Already registered? "}</span>
            <Link style = {{color:"white"}} to="/login">Log in</Link>
        </form>
        </div>
        </div>
      );
    }
  }
  
  
  export default SignupForm;