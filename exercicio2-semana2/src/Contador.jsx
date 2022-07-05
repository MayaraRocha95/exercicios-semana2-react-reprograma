import { useState } from 'react'
import './contador-estilo.css'

function Contador () {
  // chamar o useState desestruturando um array que recebe
  // 2 informações: variavel, função atualizadora da variavel
  // Dentro do parametro do useState vai o valor inicial da variavel 
  const [contador, setContador] = useState(0)
// criar uma função que será chmada no onClick 
// essa função recebe a regra que vai dentro da variavel
  function incrementa(){
    setContador(contador + 1)
  }

  return (
     //h1---Vai receber um número que está guardado numa variavel e vai atualizando a cada clique
     //button---vou receber uma função que vai atualizar a variavel de cima
    <>
    
    <h1>{contador}</h1>
    <button className="btn" onClick={incrementa}>Conta 1+</button>

    </>
  )
}
export default Contador