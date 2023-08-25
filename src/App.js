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
const [sate, setSate] = React.useState([])
const [r, setR] = React.useState(false)

function display(event){
  //setState(state => {state.map(stat =>([event.target.value]))})
  setState(event.target.value)
}

function display2(){
  //if(state.trim()!==""){
  //const v = 
  /////////////////////////////////////////////////////////////////////////////setSate(sate => {sate.push(state)})
  setSate([...sate, state])
  ////////////////////////////////////////////////////////////////////////////////////////setR(true)//}
  // else{
  setR(true)
    setState("")
   //}
  // tried event.target.value here. Didn't work - setState()
  //bado setState(target.value)
  //return <ul><li>{state}  <button onClick={remove}>X</button></li></ul>
  //setState("")
}

//const eleg = sate.map(sat => <li>{state}</li>)

function reset(){
if(r === true){
  
  //setR(false)
  //setState("")
}
}

function remove(event){
  //for(let i = 0; i < sate.length; i++){
//   let b = []
//   b = sate.filter(sat => sat!==event.target.value)
// return b

//var array = this.state.people;

  var index = sate.indexOf(event.target.value); // Let's say it's Bob.
  delete sate[index];

}
//}
//{ sate && <button onClick={remove}>X</button>}
//{r ? (<ul><li>{state}  <button onClick={remove}>X</button></li></ul>) : false}
//{r ? <li>{state}  <button onClick={remove}>X</button></li>: false}
//{eleg}
  return (
    <div className="App">
      <header className="App-header">
        <div><input type="text" value={state} placeholder='biz' onChange={display}></input>
        <button onClick={display2}>Add</button></div>        
         <ul>
         
           {sate.map((sat, index) => (<li key={index}>{sat} <button onClick={remove}>X</button></li>))}
           </ul>          
      </header>
    </div>
  );
}

export default App;
