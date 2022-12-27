import React from 'react'
import { useNavigate } from 'react-router-dom'
import Moves from './Moves'
import './styles/cardId.css'

const CardId = ({ pokemon }) => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate('/pokedex')
    }

    return (
        <div className='cardId-container'>
            <div onClick={handleGoBack}><i className="fa-solid fa-arrow-left cardId-arrow"></i></div>
            <article className='cardId-poke'>
                <header className={`cardId-poke__header bg-${pokemon?.types[0].type.name}`}>
                    <img className='card-id__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                </header>
                <section className={`cardId-poke__header-info letter-${pokemon?.types[0].type.name}`}>
                    <h2 className='cardId-poke__header-number'><span>#</span>{pokemon?.order}</h2>
                    <h2 className='cardId-poke__header-name'>{pokemon?.name}</h2>
                </section>
                <section className='cardId-poke__header-weight-height'>
                    <div className='cardId-poke__weight'><span className='little'>Weight</span>{pokemon?.weight}</div>
                    <div className='cardId-height'><span className='little' >Height</span>{pokemon?.height}"</div>
                </section>
                <div className='tables__container'>
                    <section className='type__table-container'>
                        <div className='type__table'>
                            <div className='type__table-title'>Type</div>
                            <div className='type__table-type-container'>
                                {
                                    pokemon?.types.map(e => (
                                        <span className={`type__table-type bgId-${e.type.name}`}>{e.type.name}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    <section className='abilities__table-container'>
                        <div className='abilities__table'>
                            <div className='abilities__table-title'>Abilities</div>
                            <div className='abilities__table-abilities-container'>
                                {
                                    pokemon?.abilities.map(e => (
                                        <span className='abilities__table-abilities'>{e.ability.name}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </div>
                <section className='stats__section'>
                    <h2 className='stats__section-header'>Stats</h2>
                    <div className='stat__HP-container'>
                        <div className='stat__title-and-value'>
                            <span>HP:</span>
                            <span>{pokemon?.stats[0].base_stat}/150</span>
                        </div>
                        <div className='statbar__container'>
                            <div className='statbar__value' style={{ height: 24 + 'px', width: `${pokemon?.stats[0].base_stat}` + '%', borderRadius: 20 + 'px' }}></div>
                        </div>
                    </div>
                    <div className='stat__HP-container'>
                        <div className='stat__title-and-value'>
                            <span>Attack:</span>
                            <span>{pokemon?.stats[1].base_stat}/150</span>
                        </div>
                        <div className='statbar__container'>
                            <div className='statbar__value' style={{ height: 24 + 'px', width: `${pokemon?.stats[1].base_stat}` + '%', borderRadius: 20 + 'px' }}></div>
                        </div>
                    </div>
                    <div className='stat__HP-container'>
                        <div className='stat__title-and-value'>
                            <span>Defense:</span>
                            <span>{pokemon?.stats[2].base_stat}/150</span>
                        </div>
                        <div className='statbar__container'>
                            <div className='statbar__value' style={{ height: 24 + 'px', width: `${pokemon?.stats[2].base_stat}` + '%', borderRadius: 20 + 'px' }}></div>
                        </div>
                    </div>
                    <div className='stat__HP-container'>
                        <div className='stat__title-and-value'>
                            <span>Speed:</span>
                            <span>{pokemon?.stats[5].base_stat}/150</span>
                        </div>
                        <div className='statbar__container'>
                            <div className='statbar__value' style={{ height: 24 + 'px', width: `${pokemon?.stats[5].base_stat}` + '%', borderRadius: 20 + 'px' }}></div>
                        </div>
                    </div>
                </section>
            </article>
            <article className='cardId-movements'>
                <div className='moves__container'>
                    <h2 className='moves__title'>Moves</h2>
                    {
                        pokemon?.moves.map(e => (
                            <Moves e={e} />
                        ))
                    }
                </div>
            </article>
        </div>
    )
}

export default CardId