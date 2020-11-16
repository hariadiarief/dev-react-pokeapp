import React, { useState, useEffect } from 'react'

export default function DetailPokemon({ match }) {
	const [detailPokemon, setDetailPokemon] = useState()

	useEffect(() => fetchPokemonDetail(), [])

	const fetchPokemonDetail = () => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
			.then((response) => response.json())
			.then((json) => {
				setDetailPokemon(json)
			})
	}

	console.log(detailPokemon)

	return <h1>{detailPokemon?.name}</h1>
}
