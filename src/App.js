import './App.less';
import {AuthorizedRoutes, NonAuthorizedRoutes} from "./Routes";
import React from "react";
import {getProfileFetch, logoutUser, toggleDarkmode} from './actions/actions'
import { connect } from 'react-redux';
import store from './Store'
import Navbar from './components/Navbar'
import {ToggleSwitch} from './shared'
import moon from './assets/images/moon.png'

import { withRouter } from 'react-router-dom'


class App extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      authorized: null,
      darkmodeStatus: false
    };

  }

 async componentDidMount(){
  await this.props.getProfileFetch();
  this.setState({authorized: store.getState().reducer.isAuthenticated})
}

  switchModeHandler = () => {
    // call toggleDarkMode with !currentglobal state
    this.props.toggleDarkmode(!store.getState().reducer.darkmode);
    console.log("status of darkmode is " + store.getState().reducer.darkmode)
    this.setState({darkmodeStatus: store.getState().reducer.darkmode})
  }


  handleClick = async event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    await this.props.logoutUser()
    await this.props.getProfileFetch()
    
    this.props.history.push("/login");
  }
  
  render (){

    let routes;
    if(store.getState().reducer.isAuthenticated){
      routes = <AuthorizedRoutes/>
    }
    else if(store.getState().reducer.isAuthenticated === false){
      routes = <NonAuthorizedRoutes/>
    }
    else{
      routes = null;
    }

    // stores object at first, then after the state updates, it becomes a string
    console.log("in App.js render " + JSON.stringify(store.getState()))

    return (
      
      <div>
        
        {store.getState().reducer.isAuthenticated
            ? <nav className="navbar"><span className = "lii"><ToggleSwitch title = {'Dark Mode: '} status = {this.state.darkmodeStatus} onClick={this.switchModeHandler}/></span><span className = "lii"><button className = "logout-btn" onClick={this.handleClick}>Log Out</button></span></nav> 
            : null
          }
        
            {routes}
          
      </div>
        
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser()),
  toggleDarkmode: (bool) => dispatch(toggleDarkmode(bool)) // call action switch background
})

export default withRouter(connect(null, mapDispatchToProps)(App));