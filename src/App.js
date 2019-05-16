import React from 'react';
import './App.less';
import Pokedex from './components/Pokedex';
import Background from './assets/images/background_image.png';

class App extends React.Component{
  
  render (){
    let style = {backgroundImage: "url(" + require('./assets/images/background_image.png') + ")",
    backgroundPosition: 'center',
    height: "100%",
    backgroundRepeat: 'no-repeat'}
    return (
      <div className = "bg">
        <Pokedex/>
      </div>
        
    );
  }
}

export default App;
