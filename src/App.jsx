import { useState, useEffect } from 'react';
import Product from './components/product';


function App() {

  const [listaProdutos, setListaProdutos] = useState({})
  const [rate, setRate] = useState(0)
  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(1);

  const clickUp = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const clickDown = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  useEffect(() => {
    async function carregaProdutos() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/' + counter);
        const listaProdutos = await response.json();
        setListaProdutos(listaProdutos);
        setRate(listaProdutos.rating.rate)
        setCount(listaProdutos.rating.count)
      } catch (error) {
        console.log(error.message)
      }
    }
    carregaProdutos();

  }, [counter])

  return (
    <div className="main">
      <div className='navigate'>
        <button name='esquerda' onClick={clickDown}>◀</button>
        <input type="text" placeholder={counter} disabled />
        <button name='direita' onClick={clickUp}>▶</button>
      </div>      
        <Product
          product={listaProdutos}
          rate={rate}
          count={count}
          />
    </div>          
  )
}

export default App
