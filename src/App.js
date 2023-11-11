import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProgressbarPrac from "./ProgressbarPrac"
import Ram from "./Ram"

function App() {
const [number, setNumber] = React.useState(0)

function add(){
  setNumber(number => number + 1)  
}

function subtract(){
  setNumber(number => number - 1)  
}

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Head to the next or previous number by clicking the add '+' or subtract '-' button</p>        
        <div className="big-div"><div className="number-div"><h2>{number}</h2></div>
        <button onClick={subtract} className="add-b"><h1>-</h1></button>
        <button onClick={add} className="sub-b"><h1>+</h1></button></div>      
      </header>
    </div>
  );
}

export default App;
