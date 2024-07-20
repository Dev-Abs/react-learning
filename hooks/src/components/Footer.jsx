import React, { useContext } from 'react'
import { UseContextContext } from '../contexts/UseContextContext'

const Footer = () => {
    const {phone} = useContext(UseContextContext); // Access the context value using useContext hook.
  return (
    <div>
      <h2>Footer</h2>
      <h3>Phone: {phone}</h3>
    </div>
  )
}

export default Footer
