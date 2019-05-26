import './App.less';
import { Link } from "react-router-dom";
import Routes from "./Routes";
import React from "react";
import {getProfileFetch, logoutUser} from './actions/actions'
import { connect } from 'react-redux';
import store from './Store'

import { Route, Switch } from "react-router-dom";
import Pokedex from './containers/Pokedex'
import Login from "./containers/Login";
import Logout from './containers/Logout'
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup"

import { withRouter } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'


class App extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      authorized: false
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
  this.props.getProfileFetch();

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
        <Switch>
          <PrivateRoute path="/" exact component={Pokedex} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
        
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(null, mapDispatchToProps)(App));