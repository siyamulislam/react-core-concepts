import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const productList = [
    { id:1001, name: 'Alu', price: 20 },
    { id:1002, name: 'Potol', price: 45 },
    { id:1003, name: 'Begun', price: 80 },
    { id:1004, name: 'Piyaj', price: 43 }
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
        productList.map(p => <Products product={p} key={p.id}></Products>)
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
    <div style={boxStyle}>
      <h3 >Name: {name}</h3>
      <h2 >{price} <span>$</span></h2>
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
      <Cart ct={count+20}></Cart>
      <h4> Tax: {count*.15}</h4>
      <h3> Total: {count*20}</h3>

    </div>
  )
}
function Users() {
  const ulStyle = { listStyleType: "none" }
  const [users, setUser] = useState([]);
  useEffect(() => {

    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await res.json()
      setUser(data)
    }
    fetchData();
  }, [])
  return (
    <div>
      <h2>Active: {users.length}</h2>
      <ul style={ulStyle}>
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Cart(props) {
  let count = props.ct;
  return (
    <div>
      <h3 > Price: {count}</h3>
    </div>
  )
}

export default App;
