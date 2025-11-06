import React from 'react'
import './Book.css'
const Book = (props) => {
    
  return (
    <div id="book">
        <img src={props.img} alt="" height={100} width={100}/>
        <h3>{props.title}</h3>
        <h3>{props.price}</h3>
        <button></button>
        
    </div>
  )
}

export default Book