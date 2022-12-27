import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardId from '../components/pokedexId/CardId'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import Header from '../components/shared/Header'

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [])

  if(hasError){
    return <Pokemon404/>
  }

  return (
    <article>
      <Header/>
      <CardId pokemon = {pokemon}/>
    </article>
  )
}

export default PokedexById