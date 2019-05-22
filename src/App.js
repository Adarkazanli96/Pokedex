import './App.less';
import { Link } from "react-router-dom";
import Routes from "./Routes";
import React from "react";


class App extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  render (){

    return (
      <div className = "bg">
        <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
        <div className="App container">
        
      <Routes/>
    </div>
      </div>
        
    );
  }
}

export default App;
