import React from 'react'
import './styles/moves.css'

const Moves = ({e}) => {
    console.log(e.move.name)
  return (
    <article>
        <span className='moves__card'>{e.move.name}</span>
    </article>
  )
}

export default Moves