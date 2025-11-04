import React from 'react'

const Card = (props) => {
  return (
    <div id="card">
        <div id="first">
            <img src={props.src} alt=""  height={40} width={40}/>
        </div>
        <div id="second">
            <h1>{props.name}</h1>
        </div>

    </div>
  )
}

export default Card