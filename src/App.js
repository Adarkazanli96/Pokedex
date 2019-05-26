import './App.less';
import { Link } from "react-router-dom";
import {AuthorizedRoutes, NonAuthorizedRoutes} from "./Routes";
import React from "react";
import {getProfileFetch, logoutUser} from './actions/actions'
import { connect } from 'react-redux';
import store from './Store'

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


  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }
  
  render (){
    let routes;
    if(this.state.authorized){
      routes = <AuthorizedRoutes/>
    }
    else if(this.state.authorized === false){
      routes = <NonAuthorizedRoutes/>
    }
    else{
      routes = null;
    }

    console.log(store.getState())

    return (
      
      <div className = "bg">
        <ul className="navbar">
        <Link to="/">Home |</Link>
        <Link to="/signup">Signup |</Link>
        <Link to="/login">Login | </Link>
        {this.state.authorized
            ? <button className = "logout-btn" onClick={this.handleClick}>Log Out</button>
            : null
          }        
        </ul> 
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