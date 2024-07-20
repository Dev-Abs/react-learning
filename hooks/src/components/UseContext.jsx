// UseContext Hook, explain? , useContext is a hook that allows you to subscribe to React context without introducing nesting.
// useContext(MyContext) only lets you read the context and subscribe to its changes. You still need a <MyContext.Provider> above in the tree to provide the value for this context.
// useContext(MyContext) is equivalent to static contextType = MyContext in a class, or <MyContext.Consumer>.
// Use context hook allows you to access data from any level of the component tree without having to pass down props to each level.
// steps to use useContext hook
// 1. Create a context using React.createContext() method.
// 2. Wrap the parent component inside the context provider.
// 3. Use useContext hook to access the data from the context.
// 4. Pass the context value to the provider.
// 5. Use the context value in the child component.
// in simple terms crerating, providing and consuming context
import React from 'react'
import Profile from './Profile'
import Footer from './Footer'

const UseContext = () => {
  return (
    <h1>
        <Profile />
        <Footer />
    </h1>
  )
}

export default UseContext
