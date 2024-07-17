import React from 'react'

const Header = () => {
    console.log('Header component rendered')
  return (
    <div>
      <h2>Header</h2>
    </div>
  )
}

// export default Header
export default React.memo(Header) 
// React.memo is a higher order component that memoizes the component and prevents unnecessary
//  re-renders when the props do not change. It is used to optimize performance by avoiding 
//  re-renders of components that do not depend on props or state changes. In this case, 
//  the Header component is memoized using React.memo to prevent re-renders when the parent component re-renders.
