import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { LocaleContext } from 'Context/LocaleContext'

import ImgPokeBall from 'Assets/pokeball.png'
import ImgBroken from 'Assets/broken.png'
import ImgLoader from 'Assets/loader.gif'

export default function Pokdex() {
	const localeContext = useContext(LocaleContext)

	return (
		<div className='home'>
			<div className='home__title'>Your Pokedex</div>

			<div className='home__grid container'>
				{localeContext.pokedex.items?.map((pokemon, index) => {
					return (
						<div className='home__grid__item' key={index}>
							<div className='home__grid__item__save' onClick={() => localeContext.releasePokemon(pokemon.id)}>
								<img src={ImgPokeBall} alt='poke-ball' />
							</div>
							<Link className='home__grid__item__content' to={`/${pokemon.id}`}>
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
	)
}
