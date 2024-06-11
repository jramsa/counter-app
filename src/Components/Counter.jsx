//import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./CounterSlice";

function Counter() {
//const [counter, setCounter] = useState(0);
const counter = useSelector((state)=>state.counter.count);

const dispatch = useDispatch();

/*const increment = ()=>{
    setCounter(counter+1)
}

const decrement = ()=>{
    setCounter(counter-1) 
}*/

  return (
    <>
    <div>
        <h1>Mon Compteur : {counter}</h1>
        {/*<button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        */}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        
    </div>
    </>
  );
}

export default Counter;
