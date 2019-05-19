import React from 'react';
import './App.less';
import Pokedex from './components/Pokedex';

class App extends React.Component{
  
  render (){

    return (
      <div className = "bg">
        <Pokedex/>
      </div>
        
    );
  }
}

export default App;
