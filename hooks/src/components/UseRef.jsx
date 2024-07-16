import React, {useEffect, useRef, useState} from 'react'

const UseRef = () => {
    // const [count, setCount] = useState(0);
    // const [value, setValue] = useState(0);
    // useEffect(() => {
    //     setCount(prev => prev + 1);
    // });   // when using no dependency array, it will run on every render, it is increasing count infinitely, why?, because it is updating the state and causing a re-render, which triggers the useEffect again, and so on.

    // so we will use useRef to prevent this infinite loop, how?, useRef is used to store values that persist for the entire lifetime of the component, and it does not trigger a re-render when the value changes.

    // const count = useRef(0);
    // useRef returns an object with a current property

    // useEffect(() => {
    //     count.current += 1;
    // });

    // useRef for accessing DOM elements

    const inputRef = useRef(null);

    const btnClicked = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.style.background = 'red';
    }

  return (
    <h1>
    {/* <button onClick={()=>{setValue(prev => prev - 1)}}>-1</button>
    <h2>{value}</h2>
    <button onClick={()=>{setValue(prev => prev +1)}}>+1</button>
    {/* <h2>Render Count: {count}</h2> */} 
    {/* <h2>Render Count: {count.current}</h2> */}

    <input type="text" ref={inputRef} />
    <button onClick={btnClicked} >Click Here</button>
    </h1>
  )
}

export default UseRef


// useRef Hook, explain
// useRef Hook is used to create mutable references that persist for the entire lifetime of the component.
// It is a function that returns a mutable object with a current property that can be used to store values.
// The value of the current property can be changed without triggering a re-render of the component.
// useRef is commonly used to access DOM elements, store previous values, and create timers or intervals.
// It is similar to the ref attribute in class components, but can be used in functional components.
// The useRef Hook is a close replacement for the ref attribute in class components.

