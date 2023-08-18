import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

{/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

//https://reactchallenges.live/challenge/2 - CHECK FOR CHALLENGES HERE {SETINTERVAL() FOR TIME}
        const [state, setState] = React.useState(true)
        
        function toggle(){
setState(!state)
        }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggle}>Toggle</button>
        {state && <h3>Show information</h3>}
      </header>
    </div>
  );
}

export default App;
