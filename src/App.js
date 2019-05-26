import './App.less';
import { Link } from "react-router-dom";
import Routes from "./Routes";
import React from "react";
import {getProfileFetch, logoutUser} from './actions/actions'
import { connect } from 'react-redux';
import store from './Store'

import { Route, Switch, Redirect } from "react-router-dom";
import Pokedex from './containers/Pokedex'
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup"

import { withRouter } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'


class App extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      authorized: false,
    };

    //this.props.getProfileFetch();
    this.props.getProfileFetch();

  }

 async componentDidMount(){
   //await this.props.getProfileFetch();
  
 await this.props.getProfileFetch();
 this.setState({authorized: store.getState().reducer.isAuthenticated})
  
    
  }

  shouldComponentUpdate(){

    return true;
  }

 static getDerivedStateFrom(props, state){
     //await this.props.getProfileFetch();
     //this.setState({authorized: store.getState().reducer.isAuthenticated})
      //this.props.getProfileFetch();
      //this.setState({authorized: store.getState().reducer.isAuthenticated})

  console.log("in component getderived from state" + store.getState().reducer.isAuthenticated);
  //this.forceUpdate();

  

     
  }

  componentWillUpdate(nextProps, nextState){

  }

  check = () =>{
    let bool;
    this.props.getProfileFetch()
    //bool = Object.assign({}, store.getState());
    bool = store.getState().reducer.isAuthenticated
    console.log("value of bool is " + bool)
    
    
  //bool = JSON.stringify(bool);
    console.log("value of bool is " + bool)

    return bool;

  }

  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }
  
  render (){
    console.log()
    console.log('in render' + this.check());
    //console.log('in render' + JSON.stringify(this.check()));

    let something = (<Switch>
  {/*<Route exact path="/" render={() => (
  
    <Redirect to="/login"/>
  )}/>*/}
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} /></Switch>)
      

    if(this.state.authorized){
          something = (
          <Switch><Route path="/" exact component={Pokedex} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} /></Switch>)
          
    }


    return (
      
      <div className = "bg">
        <ul className="navbar">
        <Link to="/">Home |</Link>
        <Link to="/signup">Signup |</Link>
        <Link to="/login">Login | </Link>
        {this.check()
            ? <button className = "logout-btn" onClick={this.handleClick}>Log Out</button>
            : null
          }        
        </ul> 
            {something}
          
      </div>
        
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isLoggedIn: state.isLoggedIn,
  isAuthenticated: state.reducer.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));