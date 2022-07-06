import { useState } from 'react'
import './Relogio-estilo.css'

const Relogio = () =>{
  let time = new Date().toLocaleTimeString()
  const [horario, setTime] = useState(time)

  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setTime(time)
  }
  
  setInterval(updateTime, 1000)
  return(
    <div className="relogio">
    <h1>{horario}</h1>
    </div>
  )
}
export default Relogio