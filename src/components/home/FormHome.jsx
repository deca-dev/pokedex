import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/userName.slice'

const FormHome = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate() //? hook para navegar a donde sea

    const submit = e => {
        e.preventDefault()
        dispatch(setUserNameGlobal(e.target.name.value))
        navigate('/pokedex')
    }


    return (
        <form onSubmit={submit} className="pokedex__form">
            <input className="pokedex__input" type="text" placeholder="Enter your name" id='name' />
            <button className="pokedex__btn">Catch 'em all!</button>
        </form>
    )
}

export default FormHome