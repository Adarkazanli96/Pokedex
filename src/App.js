import React from 'react';
import './App.less';
import Pokedex from './containers/Pokedex';
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./Routes";

class App extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  
  render (){

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className = "bg">
        <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Pokedex Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
      <Routes childProps = {childProps}/>
    </div>
      </div>
        
    );
  }
}

export default App;
