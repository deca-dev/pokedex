import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSearch.css'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }

  return (
    <form className='input-search' onSubmit={submit}>
        <input className='input-search__input' type="text" id='search' placeholder='Search a pokemon...' />
        <button className='input-search__btn' >Search</button>
    </form>
  )
}

export default InputSearch