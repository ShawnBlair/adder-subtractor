import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProgressbarPrac from "./ProgressbarPrac"
import Ram from "./Ram"

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

//Implement a button and timmer that will start from 10 and ends at 0 and tracks the counter until the
// timer expires and button should disapper once timer expires. UseEFFECT, setInterval and clearInterval
//were used. useRef was supposed to be used here but useEffect did a perfect job.
// const [num, setNum] = React.useState(0)
// const [tnum, setTnum] = React.useState(10)

// function Add(){
//   setNum(num + 1)
// }

// React.useEffect(() => {
// const timerun = setInterval(() => {
//   setTnum(tnum => ((tnum !== 0) ? tnum - 1 : setTnum(0)))
// }, 2000)
// return () => {clearInterval(timerun)}},[tnum])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h4>No. of Clicks until timer expires</h4>
//         {num}
//         <div>Time left: {tnum} seconds</div>
//         {(tnum > 0) && <button onClick={Add}>+</button>}        
//       </header>
//     </div>
//   );

//THIS ONE'S FOR GITHUB. THIS IS APP.JS(ADD & SUBTRACT BUTTONS ON A VALUE)
// const [number, setNumber] = React.useState(0)

// function add(){
//   setNumber(number => number + 1)  
// }

// function subtract(){
//   setNumber(number => number - 1)  
// }

//   return (
//     <div className="App">
//       <header className="App-header">        
//         <div className="big-div"><div className="number-div"><h2>{number}</h2></div>
//         <button onClick={subtract} className="add-b"><h1>-</h1></button>
//         <button onClick={add} className="sub-b"><h1>+</h1></button></div>      
//       </header>
//     </div>
//   );

  //THIS IS APP.CSS
  // .number-div {
  //   background-color: white;
  //   color: black;
  //   height:180px;
  //   width: 180px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   border-radius: 90px;
  //   border: none;
  //   margin-left: 40px;
  //   font-size: 30px;
  //   }
    
  //   .add-b {
  //     background-color: black;
  //     color: white;
  //     height:100px;
  //   width: 100px;
  //   border-radius: 50px;
  //   border: none;
  //   position: absolute;
  //   bottom: 175px;
  //   right: 680px;
  //   font-size: large;
  //   }
    
  //   .sub-b {
  //     background-color: black;
  //     color: white;
  //     height:100px;
  //   width: 100px;
  //   border-radius: 50px;
  //   border: none;
  //   position: absolute;
  //   bottom: 175px;
  //   left: 720px;
  //   font-size: large;
  //   }


 //Input a number in an inputbox and have its factorial calculated instantly...you also have a button that does
 // the same work
// const [number, setNumber] = React.useState('');
//   const [result, setResult] = React.useState('');

//   const calculateFactorial = (inputValue) => {
//     const num = parseInt(inputValue);

//     if (isNaN(num)) {
//       setResult('Please enter a valid number.');
//       return;
//     }

//     if (num < 0) {
//       setResult('Factorial is undefined for negative numbers.');
//     } else {
//       setResult(factorial(num).toString());
//     }
//   };

//   const factorial = (n) => {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   };

//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     setNumber(inputValue);
//     calculateFactorial(inputValue);
//   };

//   function handleChange(){
//     //const inputValue = event.target.value;
//     setNumber(number);
//     calculateFactorial(number);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">        
//         <div className="number-div">The factorial of <input type='text' value={number} onChange={handleInputChange}></input> is {result}</div>
//          <button onClick={handleChange}>Re-Render</button>     
//       </header>
//     </div>
//   );


//Create a custom hook to track the dimensions of users window while resizing. The window width is updated
//everytime you enlarge or shrink the window
// const [number, setNumber] = React.useState(window.innerWidth)
// React.useEffect(
//   ()=>{
// window.addEventListener("resize", ()=>{
//   setNumber(window.innerWidth)
// })
// return (window.removeEventListener("resize", ()=>{
//   setNumber(window.innerWidth)
// }))
//   },[number]
// )
//   return (
//     <div className="App">
//       <header className="App-header">        
//         <div>Width:{number}px</div>
//          <div>Resize the window to see dynamic width
//           </div>    
//       </header>
//     </div>
//   );

//Make an API call using useEffect and navigate through the data
// const [number, setNumber] = React.useState(1)
// const [info, setInfo] = React.useState([])

// React.useEffect(
//   ()=>{
// fetch(`https://swapi.dev/api/people/${number}`)
//             .then(res => res.json())
//             .then(data => setInfo(data))
//   },[number]
// )

//   return (
//     <div className="App">
//       <header className="App-header">        
//         <div>StarWars Characters Info</div>
//          <div>{JSON.stringify(info, null, 2)}</div>          
//           <button onClick={()=>{setNumber(number => number+1)}}>Next Character</button>
//           {(number > 1) && <button onClick={()=>{setNumber(number => number-1)}}>Prev Character</button>}    
//       </header>
//     </div>
//   );

//IF YOU WANT TO DISPLAY YOUR HREF VALUE ON A WEBPAGE EASILY CHECK THE METHOD useParams() AND OR CHECK REACT
//CHALLENGES->ROUTER->URLPARAMETERS
const [nset, setNset] = React.useState('')
const [show, setShow] = React.useState(false)
const [nseti, setNseti] = React.useState(0)

//function componentDidMount () 
//{
  // const listItems = document.querySelectorAll('li a');
  // listItems.forEach((link) => {
  //   link.addEventListener('click', (event) => {//const href = event.target.getAttribute('href');
  //   //setNset( href );
  //   console.log(event.target.href)});
    
  // });
//}<p>Clicked Href: {nset.href}</p>

function handleClick(event){
event.preventDefault()
const href = event.target.getAttribute('href');
const id = event.target.getAttribute('id');
setNset(href)
setShow(true)
setNseti(id)
//console.log(href)
}

const lala =
  <p>Clicked Href: {nset}</p>
  

// const Employee = () => {
//   const { name } = useParams();
//   return (
//     <div className="display">
//       <h3>Employee: {name}</h3>
//     </div>
//   );
// };
//<Link to="/Lakshman">Lakshman</Link>
  return ( 
    <div className="App">
      {show ? <Ram nset={nset} id={nseti}/> : <header className="App-header">        
       <ul>Customer
        <li><a href='./Ram'  id='ram' onClick={handleClick} >Ram</a></li>
        <li>
        <a href='Lakshman' onClick={handleClick} id='l'>Lakshman</a></li>
        <li><a href='Bheem' id='b' onClick={handleClick}>Bheem</a></li>
        </ul>
        <ul>Id's
        <li><a href='1' id={1} onClick={handleClick}>1</a></li>
        <li><a href='2' id={2} onClick={handleClick}>2</a></li>
        <li><a href='3' id={3} onClick={handleClick}>3</a></li>
        <li><a href='4' id={4} onClick={handleClick}>4</a></li>
        </ul>    
      </header>}
    </div>
  );
}

export default App;
