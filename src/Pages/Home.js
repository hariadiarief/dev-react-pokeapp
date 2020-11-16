import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Link } from 'react-router-dom'

export default function Home() {
	const [limit, setLimit] = useState(10)
	const [offset, setOffset] = useState(0)
	const [isHasMore, setIsHasMore] = useState(null)
	const [pokemons, setPokemons] = useState({ isLoading: true, isLoadingMore: false, items: [] })
	const [pokemonDetail, setPokemonDetail] = useState({ isLoading: true, items: [] })

	useEffect(() => {
		fetchPokemon()
	}, [])

	const fetchPokemon = async () => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
		setPokemons((prevState) => ({ ...prevState, isLoading: true }))

		if (response.status === 200) {
			const data = await response.json().then((response) => {
				setIsHasMore(response.next ? true : false)
				return response.results.map((result, index) => {
					return { ...result, id: offset + index + 1 }
				})
			})
			setPokemons((prevState) => ({ ...prevState, isLoading: false, isLoadingMore: false, items: prevState.items.concat(data) }))
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

	const loadMore = () => {
		if (!pokemons.isLoading && !pokemons.isLoadingMore) {
			setOffset(offset + limit)
			setPokemons((prevState) => ({ ...prevState, isLoadingMore: true }))
			fetchPokemon()
		}
	}

	return (
		<div className='home'>
			<div className='home__title'>Poke Apps</div>
			<InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={isHasMore} loader={<h1>Loading</h1>}>
				<div className='home__grid container'>
					{pokemons.items.map((pokemon, index) => {
						return (
							<Link className='home__grid__item' key={index} to={`/${pokemon.id}`}>
								<img src={pokemonDetail.items.find((item) => item.id === pokemon.id)?.sprites.back_default} alt='' />
								<span>{pokemon?.name}</span>
							</Link>
						)
					})}
				</div>
			</InfiniteScroll>
		</div>
	)
}
