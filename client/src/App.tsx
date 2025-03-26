import React from 'react';
import logo from './logo.svg';
import './App.css';
import DarkMode from './components/DarkMode';
import Game from './components/Game';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DarkMode />
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-uppercase agis-bold mt-2'>
          camunited <br/>
          <code className='text-lowercase'>co.camunited</code>
        </p>
        <a
          className="App-link mb-4 text-decoration-none"
          href="https://camunited.000webhostapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to previous version@1.0
        </a>
        <Game />
        <ShoppingList name="Austin Mattix"/>
      </header>
    </div>
  );
}

export default App;
