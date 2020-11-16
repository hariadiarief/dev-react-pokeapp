import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	const [limit, setLimit] = useState(5)
	const [offset, setOffset] = useState(0)
	const [pokemons, setPokemons] = useState({ isLoading: false, items: [] })
	const [pokemonDetail, setPokemonDetail] = useState({ isLoading: true, items: [] })

	useEffect(() => {
		fetchPokemon()
	}, [])

	const fetchPokemon = async () => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
		setPokemons((prevState) => ({ ...prevState, isLoading: true }))

		if (response.status === 200) {
			const data = await response.json().then((response) => {
				return response.results.map((result, index) => {
					return { ...result, id: offset + index + 1 }
				})
			})
			setPokemons((prevState) => ({ ...prevState, isLoading: false, items: data }))

			data.forEach((items) => fetchPokemonDetail(items.id))
		} else {
			console.error()
		}
	}

	const fetchPokemonDetail = async (id) => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		if (response.status === 200) {
			const data = await response.json()
			setPokemonDetail((prevState) => ({ ...prevState, items: [...prevState.items, data] }))
		} else {
			console.error()
		}
	}

	return (
		<div>
			<h1>poke poke</h1>
			<ul>
				{pokemons.items.map((pokemon, index) => {
					return (
						<Link key={index} to={{ pathname: `/${pokemon.id}`, state: { scrollTo: 'pricing', offset: -200 } }} className='statistic__cta__membership'>
							<li>
								{pokemon.id} : {pokemon?.name}
								<img src={pokemonDetail.items.find((item) => item.id === pokemon.id)?.sprites.back_default} alt='' />
							</li>
						</Link>
					)
				})}
			</ul>
		</div>
	)
}
