import React from 'react';
import logo from './logo.png';
import './App.css';

import Data from './Data';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Data />
      </header>
    </div>
  );
}

export default App;
