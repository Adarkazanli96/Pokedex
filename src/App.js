import './App.less';
import {AuthorizedRoutes, NonAuthorizedRoutes} from "./Routes";
import React from "react";
import {getProfileFetch, logoutUser} from './actions/actions'
import { connect } from 'react-redux';
import store from './Store'
import Navbar from './components/Navbar'

import { withRouter } from 'react-router-dom'


class App extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      authorized: null,
    };

  }

 async componentDidMount(){
  await this.props.getProfileFetch();
  this.setState({authorized: store.getState().reducer.isAuthenticated})
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
            ? <nav className="navbar"><button className = "logout-btn" onClick={this.handleClick}>Log Out</button></nav> 
            : null
          }
        
        
            {routes}
          
      </div>
        
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(null, mapDispatchToProps)(App));