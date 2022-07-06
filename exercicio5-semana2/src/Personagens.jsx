import { useState, useEffect } from 'react'
import './Personagens-estilo.css'
const Personagens = () => {
  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    fetch('http://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then(data => setPersonagens(data.results))
  }, [])
  console.log(personagens)
  return (
    <>
    {personagens.map(personagem => {
      return(
        <div className="cards">
        <div className="personagens" key={personagem.id}>
           <h2>{personagem.name}</h2>
           <img src={personagem.image} alt={personagem.name}/>
         </div>
       </div>
      )
    })}
    </>
  )
}

export default Personagens