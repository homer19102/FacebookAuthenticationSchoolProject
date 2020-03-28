import React from 'react';
import logo from './aplicativo.png';
import './App.css';

import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  />
        <br></br>
        <Facebook />
      </header>
     
    </div>
  );
}

export default App;
