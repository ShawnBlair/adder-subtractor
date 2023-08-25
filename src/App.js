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

// //https://reactchallenges.live/challenge/2 - CHECK FOR CHALLENGES HERE {SETINTERVAL() FOR TIME}
//         const [state, setState] = React.useState(0)
        
//         function start(){
//           //we're supposed to use useEffect for this but since we're not setInterval will return something
//           //related to the window of the browser ie window.{...} instead of the usual constant i.e const {...}
//            window.treturn = setInterval(() => {
//             setState(state => state + 1)
//                       }, 1000)
//         }

//         function stop(){
//           return clearInterval(window.treturn)
//                   }

//                   function reset(){
//                     setState(0)
//                     return (clearInterval(window.treturn)
//                     )}

//                     return (
//                       <div className="App">
//                         <header className="App-header">
//                           <h2>Timer</h2>
//                           <div className="divuno">
//                           <span className="hrs">{Math.trunc(state / 60)} hrs : </span>
//                           <span className="mins">{Math.trunc(state / 60)} mins : </span>
//                         <span className="secs">{state % 60} secs</span><div className="div2o">
//                           <button onClick={start} className="start">Start</button>
//                           <button onClick={reset} className="reset">Reset</button>
//                           <button onClick={stop} className="stop">Stop</button></div></div>
//                         </header>
//                       </div>//you can redo the css for this code
//                     )


const [state, setState] = React.useState("")
//const [state, setState] = React.useState({type:"text", name:"text1", value: ""} )
const [sate, setSate] = React.useState([state])
const [r, setR] = React.useState(false)

function display(event){
  //setState(state => {state.map(stat =>([event.target.value]))})
  setState(event.target.value)
}

function display2(){
  //if(r===false){
    //const v = 
  console.log(setSate(sate => sate.push(sate.map(sat => <li>{state}</li>))))
  //console.log(state)
  ////////////////////////////////////////////////////////////////////////////////////////setR(true)//}
  // else{
  //   setR(false)
  //   setState("")
  // }
  // tried event.target.value here. Didn't work - setState()
  //bado setState(target.value)
  //return <ul><li>{state}  <button onClick={remove}>X</button></li></ul>
  //setState("")
}

function reset(){
if(r === true){
  
  //setR(false)
  setState("")
}
}

function remove(){
  
}
//{ sate && <button onClick={remove}>X</button>}
//{r ? (<ul><li>{state}  <button onClick={remove}>X</button></li></ul>) : false}
//{r ? <li>{state}  <button onClick={remove}>X</button></li>: false}
  return (
    <div className="App">
      <header className="App-header">
        <div><input type="text" name="text1" id={1} placeholder='biz' onChange={display}></input>
        <button onClick={display2}>Add</button></div>
         <ul>
         
           
           {reset/*complex-state-arrays, forms-state-object, tenzies the last vids, controlled-inputs
           try scrimba 1st then chatgpt*/}
           </ul>          
      </header>
    </div>
  );
}

export default App;
