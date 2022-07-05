import filmes from './dados'

import './App.css'

function App() {
 console.log(filmes)

  return (
 <div className="app">
  <h1>Ultimos Filmes que assisti</h1>
  {filmes.map(item => {
    return (
      <div key={item.id}>
        <h2>{item.nome}</h2>
        <p>{item.genero}</p>
        < img src={item.capa}/>

      </div>
    )
  })}
  <input placeholder="Digite seu nome" onChange={ e => console.log(e.target.value)} />
  <button onClick={console.log('estou clicando')}>Clique aqui</button>
  
 </div>
  )
}

export default App
