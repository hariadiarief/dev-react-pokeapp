import React, { useState, useEffect } from 'react'

export default function DetailPokemon({ match }) {
	const [detailPokemon, setDetailPokemon] = useState()

	useEffect(() => {
		const fetchPokemonDetail = async () => {
			fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
				.then((response) => response.json())
				.then((json) => {
					setDetailPokemon(json)
				})
		}
		fetchPokemonDetail()
	}, [match.params.id])

	return <h1>{detailPokemon?.name}</h1>
}
