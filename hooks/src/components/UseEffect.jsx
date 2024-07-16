import React, {useEffect, useState} from 'react'
import '../App.css'


const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {  // run when component is rendered, and any state within component is updated
    setTimeout(() => {
      setCount(count => count + 1);
    },2000);  
  }, [count]); // no dependencies array, when we use empty array, it will run only once, when using count, it will run every time count is updated
  return (
    <>
    <h1>I have rendered {count} times</h1>
    </>
  )
}

export default UseEffect


// useEffect Hook, explain
// useEffect Hook is used to perform side effects in functional components. It is a close replacement for componentDidMount,
//  componentDidUpdate, and componentWillUnmount lifecycle methods in class components. It is a function that takes two arguments,
//   a callback function and an array of dependencies. The callback function is called after the component is rendered. 
//   The array of dependencies is optional and is used to specify the values that the effect depends on. 
//   If the dependencies change, the effect is re-run. If the dependencies are not specified, the effect is run after every render.

// examples of side effects that can be performed using useEffect include fetching data from an API, subscribing to events,
// updating the document title, and setting up timers or intervals.
