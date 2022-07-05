import { useState } from 'react'
import './counter-style.css'

function Counter(){
  const [counter, setCounter] = useState(0)

  function decrement() {
    setCounter(counter - 1)
  }
 function increment() {
  setCounter(counter + 1)
 }
  return (
    <div>
      <button className="btn" onClick={decrement}>➖</button>
      <h1 className="number">{counter}</h1>
      <button  className="btn" onClick={increment}>➕</button>
    </div>
  )
}

export default Counter