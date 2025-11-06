import React from 'react'
import { useState } from 'react';
import './Count.css';

const Count1 = () => {
    const [count ,setCount] =useState(0)

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1)
    }
  return (
    <div>
        <h1>Counter App</h1>
        <button onClick={increment} >+</button>
        <br />
        <span>{count}</span>
        <br />
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Count1