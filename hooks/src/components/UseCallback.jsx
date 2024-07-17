// Use Callback Hook
// useCallback Hook is used to memoize a function and cache the result to avoid unnecessary re-creation of the function.
// It is a function that takes a function and an array of dependencies, and returns the memoized function.
// The memoized function is only re-created when the dependencies change.
// useCallback is useful for optimizing performance by avoiding unnecessary re-creations of functions.

// difference between useMemo and useCallback
// useMemo is used to memoize the result of a function, while useCallback is used to memoize the function itself.


import React, {useCallback, useState} from 'react'
import Header from './Header';

const UseCallback = () => {
    const [counter, setCounter] = useState(0);

    // const newFunction = () => {}
    const newFunction = useCallback(() => {}, []); // it will prevent the re-render of the Header component on every render of the parent component, because it will only re-allocate the newFunction when the dependencies change, which is an empty array in this case.
    // const newFunction = useCallback((counter) => {}, [counter]);
  return (
    <h1>
        <Header newFn = {newFunction} /> 
        {/* // it will re-render the Header component on every render of the parent component, because every time current component rendered it will reallocate the newfunction a new location in memory so as result props changes and header component re-rendered, using callback hook we can avoid this */}
        {/* Header component is re-rendered on every render of the parent component, even though it does not depend on any state or props. This can be optimized using the useCallback Hook. */}
        <h2>{counter}</h2>
        <button onClick={()=>{setCounter(prev => prev + 1)}}>Increment</button>
    </h1>
  )
}

export default UseCallback
