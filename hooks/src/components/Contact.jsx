import React, { useContext } from 'react'
import { UseContextContext } from '../contexts/UseContextContext'

const Contact = () => {
    const {phone,name} = useContext(UseContextContext); // Access the context value using useContext hook.
  return (
    <div>
      <h2>Contact</h2>
      <h3>Phone: {phone}</h3>
      <h3>Name: {name}</h3>
    </div>
  )
}

export default Contact
