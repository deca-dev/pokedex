import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import Header from '../components/shared/Header'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])

  const userName = useSelector(state => state.userName)

  // -- Lógica de programación para paginación
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage

  return (
    <div className='x'>
      <header className='pokedex-header'>
        <div className='header__poke'>
          <Header />
        </div>
        <div className='header__band'>
          <img className='pokedex__img-header' src='/images/home/pokedex.png/' alt="" />
          <p className='header__message'><span className='header__red-letter'>Welcome&nbsp;{userName}</span>,here you can find your favorite pokemon</p>
        </div>
      </header>
      <aside className='pokedex__aside__input__select'>
        <InputSearch />
        <SelectByType setTypeSelected={setTypeSelected}
        setPage = {setPage}
        />
      </aside>
      <main className='cards-container-main'>
        <div className='cards-container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
          <div className='pagination__parent'>
            <Pagination
              page={page}
              pagesLength={pokemons && Math.ceil(pokemons?.length / pokePerPage)}
              setPage={setPage}
            />
          </div>
        </div>
      </main>

    </div>
  )
}

export default Pokedex