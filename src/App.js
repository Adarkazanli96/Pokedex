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
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup"


class App extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }

  async componentDidMount(){
    await this.props.getProfileFetch()
    console.log(store.getState());
    console.log(this.props.currentUser)
  }

  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }
  
  render (){

    return (
      <div className = "bg">
        <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul> 
        <Switch>
    <Route path="/" exact component={Pokedex} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
  {this.props.currentUser.user_id
            ? <button onClick={this.handleClick}>Log Out</button>
            : null
          }
      </div>
        
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);