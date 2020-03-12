import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Aamir','Shah Rukh','Salman','Akshay','Ranbir']//single elsement array 
  var person = {name: 'mahfuzur rahman',
          job: "singer"
}
var person2 = {name: 'eva rahman',job: "singer"}
var style = {
  color: 'red',
  backgroundColor: 'yellow'
}

// we write product box
const products = [
  {name:'pen',price:'$2',quality:'good'},
  {name:'book',price:'$10',quality:'best'},
  {name:'exercise book',price:'$5',quality:'low'}
]
//write a counter for increase and decrease, also add event handler
function Counter(){
const [preciousValue, setCount] = useState(0);

  return(
  <div>
    <h1>Count: {preciousValue}</h1>
    <button onClick={() => setCount(preciousValue - 1)}>Decrease</button>
    <button onClick={() => setCount(preciousValue + 1)}>Increase</button>
  </div>
  )
}
//data load from server
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() =>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => setUsers(data));
  },[])  //empty string dilam noile data repeat hote thakbe
  
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(userName => <li>{userName.name}</li>)
        }
        <h1>city name</h1>
        {
          users.map(userName => <li>{userName.address.city}</li>)
        }
        <h3>E-mail</h3>
        {
           users.map(userName => <li>{userName.email}</li>)
        }
      </ul>
    </div>
  )
}

//main body of react
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>

        {/* //counter part */}
        <Counter></Counter>

        {/* call single element by using map */}
        <ul>
          {
           nayoks.map(nayok => <li>{nayok}</li> )
          }

          {/* call multiple property using map */}
          {
           products.map(pd => <li>{pd.name}, {pd.price}, {pd.quality}</li>) 
          }
        </ul>
{/* we showed the box of products */}
{
  products.map(pd => <Product products={pd}></Product>)
}

<Users></Users>


  <h1>My heading</h1>
        <p>My first react paragraph</p>
        <h3 style={{color:'green',backgroundColor:'white'}}>Name: {person.name+" "+person.job}</h3>
  <h4 style={style}>Name: {person2.name+" "+person2.job}</h4> {/* call from previous declaraion */}
  <h4 style={{color:'cyan',backgroundColor:'salmon',padding:'10px',margin:'10px'}}>helllllllllllooooooooo</h4>
  <Person></Person>
  <Person></Person>
  <Person></Person>
  <Person></Person>
  <h1>shows some hero / heroine name</h1>
  <Hero name='Shakib Khan' heroineName='Apu Biswas'></Hero>
  <Hero name='Alamgir' heroineName='Sabana'></Hero>
  <Hero name='Salman Shah' heroineName='Shabnur'></Hero>
  <Hero name='Riaz' heroineName='Popy'></Hero>

  {/* we showed products box */}
  <Product products = {products[0]}></Product>
  <Product products = {products[1]}></Product>
  <Product products = {products[2]}></Product>

  {/* //we showed nayoks in list order using map  */}

      </header>
    </div>
  );
}

// we write function after the App function
function Person(){
  const personStyle = {
    border:'2px solid red',
    margin:'10px',
    padding:'10px'
  }
  
  return (
    <div style={personStyle}>
      <h1>Name: Shakib Al Hasan</h1>
      <h3>Player of the year</h3>
    </div>

  )
}

// hero function
function Hero(props){
  const styleHero = {
    border:'2px solid salmon',
    width:'500px',
    height:'200px',
    margin:'10px',
    padding:'5px'
  }
  // console.log(props); we can test how it works
  return(
    <div style={styleHero}>
      <h3>Hero Name : {props.name} </h3>
      <h4>Heroine Name : {props.heroineName} </h4>
    </div>
  )
}


//function for product
function Product(props){
  const styleProduct = {
    color:'black',
    border : '1px solid grey',
    borderRadius : '5px',
    backgroundColor:'lightGrey',
    height:'300px',
    width:'400px',
    float:'right',
    marginBottom: '10px'
  }
  const {name, price, quality} = props.products;
  return(
    <div style={styleProduct}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <h5>{quality}</h5>
      <button>Buy now</button>
    </div>
  )
}
export default App;
