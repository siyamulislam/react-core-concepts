import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const productList = [
    { name: 'Alu', price: 20 },
    { name: 'Potol', price: 45 },
    { name: 'Begun', price: 80 },
    { name: 'Piyaj', price: 43 }
  ]
  const productName = productList.map(product => product.name)


  return (


    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Bag></Bag>
      <Users></Users>
      <Products product={productList[0]}></Products>
      <Products product={productList[1]}></Products>
      <Products product={productList[2]}></Products>
      <Products product={productList[3]}></Products>
      {
        productList.map(p => <Products product={p}></Products>)
      }


    </div>
  );
}

function Products(props) {
  const boxStyle = {
    border: '3px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightGreen',
    width: '300px',
    padding: '5px',
    margin: '5px',
    float: 'left',

  }
  const { name, price } = props.product
  return (
    <div className="product" style={boxStyle}>
      <h3>Name: {name}</h3>
      <h2>{price} <span>$</span></h2>
      <button>Buy Now!</button>
    </div>
  )
}

function Bag() {
  const [count, setCount] = useState(4);
  const addItem = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h2> Bag: {count}</h2>
      <button onClick={addItem}>add</button>
      <button onClick={() => setCount(count - 1)}>remove</button>
    </div>
  )
}
function Users() {
  const ulStyle = {listStyleType: "none"}
  const [users, setUser] = useState([]);
  useEffect(() => {

    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await res.json()
      setUser(data)
    }
    fetchData();

  },[])
  return (
    <div>
      <h2>Users:{users.length}</h2>
      <ul style={ulStyle}>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
      {console.log(users)}
      
    </div>
  )
}

export default App;
