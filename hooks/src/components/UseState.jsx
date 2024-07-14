import '../App.css';
import React, { useState } from 'react';
function UseState() {

  const [color, setColor] = useState('Red');
  const [count, setCount] = useState(0);

  // const [brand, setBrand] = useState('Ford');
  // const [model, setModel] = useState('Mustang');
  // const [year, setYear] = useState(1964);
  // const [price, setPrice] = useState(35000);
  // const [carColor, setCarColor] = useState('Red');

  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: 1964,
    price: 35000,
    carColor: 'Red'
  });

  const changeCarColor = () => {
    setCar((prevCar) => {
      return { ...prevCar, carColor: prevCar.carColor === 'Blue' ? 'Red' : 'Blue' }
    });
  }

  const changeColor = () => {
    if (color === 'Red') {
      setColor('Blue');
    }
    else {
      setColor('Red');
    }
  }

  const incrementBy4 = () => {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My favourite color is {color}</h1>
        <button onClick={changeColor}>{color === 'Red' ? 'Blue' : 'Red'}</button>
        <h2>Count: {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <p></p>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <p></p>
        <button onClick={incrementBy4}>Increment by 4</button>
        <p></p>
      <h1>My {car.brand}</h1>
      <h2>it is {car.carColor} {car.model} from {car.year} pricing ${car.price}</h2>
      <button onClick={changeCarColor}>change color</button>
      </header>

    </div>
  );
}

export default UseState;


// useState? explain
// useState is a Hook that lets you add state to function components. 
// It accepts an argument which is the initial state and returns an array with two elements. 
// The first element is the current state value and the second element is a function that lets you update it.

