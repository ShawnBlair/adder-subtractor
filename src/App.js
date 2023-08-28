import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProgressbarPrac from "./ProgressbarPrac"

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

//For an input box with an add button aside. Anytime you type in data and click add, what you've typed in gets
//displayed below inform of an unordered list (the data you type is added into the list below)
// const [ival, setIval] = React.useState("") //=> for a single input just initialise the state to a single
//string but if it's a group you canput it in an object i.e {username:"", fullname:"", age:""}
// const [iarr, setIarr] = React.useState([]) //=> this part can stayempty even if it's in a group situation

// function handleChange(event){
// setIval(event.target.value) //=> GROUP setIval(ival => ({...ival, [event.target.name]: event.target.value}))
// }

// function add(){
// setIarr([...iarr,ival])
// setIval("") //=> For a group setIval({username:"", fullname:"", age:""})
// }

// function remove(index){
//   const newarr = iarr.filter((_,i) => (i !== index))
//   setIarr(newarr)
// }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div><input type='text' onChange={handleChange} value={ival}></input> <button onClick={add}>Add</button></div>
//         <ul>
//           {iarr.map((iarr1,index) =>( <li key={index}>{iarr1} <button onClick={() => remove(index)}>X</button></li>))}
//           </ul>         
//       </header>
//     </div>
//   );

//A Progress Bar that should fill based on the input percentage value.
// const [rec, setRec] = React.useState(0)
// const [completed, setCompleted] = React.useState(0);

// function handleChange(event){
//   setCompleted(rec)
// setRec(event.target.value)
// //setCompleted(rec)
// }

// function calculation(){
//   setCompleted(rec)
// }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>Progress bar</h3>

//         <ProgressbarPrac bgcolor={"#6a1b9a"} completed={completed} valueChanged={calculation}/>

//         <h6>Input Percentage:</h6><input type="text" onChange={handleChange} onKeyUp={handleChange}></input>        
//       </header>
//     </div>
//   );

const [num, setNum] = React.useState(0)
const [tnum, setTnum] = React.useState(10)

function Add(){
  setNum(num + 1)
}

window.timerun = setInterval(() => {
  //setTnum(tnum => {tnum - 1})
  ////////////////////////////////////////////////uncomment here first setTnum(tnum - 1)
  if(tnum === 0)
  {clearInterval(window.timerun)}
    //else
    //{setTnum(tnum - 1)}
}, 1000)

  return (
    <div className="App">
      <header className="App-header">
        <h4>No. of Clicks until timer expires</h4>
        {num}
        <div>Time left: {tnum} seconds</div>

        <button onClick={Add}>+</button>        
      </header>
    </div>
  );
}

export default App;
