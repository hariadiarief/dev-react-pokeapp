import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { LocaleContext } from 'Context/LocaleContext'

import ImgBroken from 'Assets/broken.png'
import ImgLoader from 'Assets/loader.gif'
import ImgPokeBallFilled from 'Assets/pokeball-filled.png'
import Layout from '../Components/Layout'

export default function Pokdex() {
	const localeContext = useContext(LocaleContext)

	return (
		<Layout>
			<div className='home'>
				<div className='home__title'>Your Pokédex</div>

				<div className='home__grid container'>
					{localeContext.pokedex.items?.map((pokemon, index) => {
						return (
							<div className='home__grid__item' key={index}>
								<div
									className='home__grid__item__save'
									style={localeContext.pokedex.items.find((item) => item.id === pokemon.id) ? { backgroundColor: 'red' } : null}
									onClick={() => localeContext.releasePokemon(pokemon.id)}>
									<img src={ImgPokeBallFilled} alt='poke-ball' />
								</div>
								<Link className='home__grid__item__content' to={`/pokemon/${pokemon.id}`}>
									<img
										src={pokemon.spiritImage ?? ImgLoader}
										onError={(e) => {
											e.target.onError = null
											e.target.src = ImgBroken
										}}
										alt={pokemon.name}
									/>
									<span>{pokemon?.name}</span>
								</Link>
							</div>
						)
					})}
				</div>
			</div>
		</Layout>
	)
}
