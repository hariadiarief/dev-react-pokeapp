import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import { LocaleContext } from 'Context/LocaleContext'

import ImgBroken from 'Assets/broken.png'
import ImgLoader from 'Assets/loader.gif'
import ImgPokeBallFilled from 'Assets/pokeball-filled.png'
import ImgEmptyState from 'Assets/image/empty-state.svg'
import { Layout, Meta } from 'Components'

export default function Pokdex() {
	const localeContext = useContext(LocaleContext)

	return (
		<Fragment>
			<Meta title='Collection' />
			<Layout>
				<div className='home'>
					<div className='home__title'>Your Collection</div>
					{!localeContext.collection.items.length ?
						<div className='collection__emmpty-state'>
							<img src={ImgEmptyState} alt="emmpty-state" />
							<span>You Don't Have Pokemon Yet</span>
							<Link to='/'>Find Pokemon</Link>
						</div>
						:
						<div className='home__grid container'>
							{
								localeContext.collection.items?.map((pokemon, index) => {
									return (
										<div className='home__grid__item' key={index}>
											<div
												className='home__grid__item__save'
												style={localeContext.collection.items.find((item) => item.id === pokemon.id) ? { backgroundColor: 'red' } : null}
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
					}

				</div>
			</Layout>
		</Fragment>
	)
}
