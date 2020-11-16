import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		fetchPokemon()
	}, [])

	const fetchPokemon = () => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=1')
			.then((response) => response.json())
			.then((json) => {
				setPokemons(json.results)
			})
	}

	return (
		<div>
			<ul>
				{pokemons.map((pokemon, index) => (
					<Link to={{ pathname: `/${index + 2}`, state: { scrollTo: 'pricing', offset: -200 } }} className='statistic__cta__membership'>
						<li>{pokemon?.name}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}
