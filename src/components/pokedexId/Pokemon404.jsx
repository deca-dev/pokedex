import React from 'react'
import { Link } from 'react-router-dom'
import './styles/error404.css'

const Pokemon404 = () => {
    return (
        <div className='error404__container'>
            <h1 className='error404__header'>Sorry, Pokemon not found try another one</h1>
            <Link className='error404__link' to='/pokedex'>Back to Pokédex</Link>
            <img className='error404__img' src="./images/Error404/cubone.png" alt="" />

        </div>
    )
}

export default Pokemon404