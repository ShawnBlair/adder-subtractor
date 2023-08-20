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
        const [state, setState] = React.useState(0)
        
        function start(){
          //we're supposed to use useEffect for this but since we're not setInterval will return something
          //related to the window of the browser ie window.{...} instead of the usual constant i.e const {...}
           window.treturn = setInterval(() => {
            setState(state => state + 1)
                      }, 1000)
        }

        function stop(){
          clearInterval(window.treturn)
                  }

                  function reset(){
                    clearInterval(window.treturn)
                    setState(0)}

  return (
    <div className="App">
      <header className="App-header">
        <h2>Timer</h2>
        <span>{Math.trunc(state / 60)} hrs : </span> <span>{Math.trunc(state / 60)} mins : </span>
      <span>{state % 60} secs</span>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={stop}>Stop</button>
      </header>
    </div>
  );
}

export default App;
