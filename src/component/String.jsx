import React, { useState } from 'react'
import './String.scss'


export default function String() {

  const reverseString = (str) => {
    return str.split('').reverse().join('');
  }

  const [title, setTitle] = useState('Function based component');
  
  const clickHandler = (e) => {
    e.preventDefault();
    setTitle(reverseString);
  }

  return (
    <div className='container'>
      <div className='text'><h1>{title}</h1></div>
      <button className='btn' onClick={clickHandler}>reverse</button>
    </div>
  )
}
