// UseMemo Hook
// useMemo Hook is used to memoize the result of a function and cache the result to avoid unnecessary re-computation.
// It is a function that takes a function and an array of dependencies, and returns the memoized value.
// The memoized value is only re-computed when the dependencies change.
// useMemo is useful for optimizing performance by avoiding unnecessary re-computations.

import React, {useMemo, useState} from 'react'

const UseMemo = () => {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);

    function cubeNumber(number) {
        console.log('Calculating cube');
        return number * number * number;
    }
    // const result = cubeNumber(number); // this will re-calculate the cube of the number on every render, which is unnecessary, so we can use useMemo to memoize the result of the cubeNumber function.

    const result = useMemo(() => cubeNumber(number), [number]); // this will memoize the result of the cubeNumber function and only re-calculate it when the number changes.
  return (
    <h1>
        <input type="text" value={number} onChange={(e) => {setNumber(e.target.value)}} />
        <h2>Cube of the Number: {result}</h2>
        <button onClick={()=>{setCounter(prev => prev +1)}}>Counter++</button>
        <h2>Counter: {counter}</h2>
         {/* when we change the input value, the cube of the number is calculated, and the counter is not affected, but the cube of the number is re-calculated on every render, which is unnecessary, so we can use useMemo to memoize the result of the cubeNumber function. */}
    </h1>
  )
}

export default UseMemo
