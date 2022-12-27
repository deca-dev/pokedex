import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import './styles/selectSearch.css'


const SelectByType = ({ setTypeSelected, setPage}) => {

  const [types, setTypes] = useState()


  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setTypeSelected(e.target.value)
    setPage(1)
  }

  return (
    <div className='custom-select'>
      <select onChange={handleChange} name="" id="">
        
          <option className='select_option' value="All Pokemons">All Pokemons</option>
          {
            types?.map(type => (
              <option className='select_option' key={type.url} value={type.url}>{type.name}</option>
            ))
          }
      
      </select>
    </div>
  )
}

export default SelectByType