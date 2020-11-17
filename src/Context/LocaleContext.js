import React, { createContext, useEffect, useState } from 'react'

export const LocaleContext = createContext()
export const LocaleContextConsumer = LocaleContext.Consumer

export default function LocaleContextProvider({ children }) {
	const [pokedex, setPokedex] = useState({
		isLoading: false,
		items: JSON.parse(localStorage.getItem('pokedex')) ?? [],
	})

	const releasePokemon = async (pokeId) => {
		if (window.confirm('Really to release this Pokemon?')) {
			setPokedex((prevState) => ({ ...prevState, items: pokedex.items.filter((item) => item.id !== pokeId) }))
		}
	}

	let catchPokemon = () => {
		return new Promise(async function (resolve, reject) {
			Math.floor(Math.random() * 10) > 5 ? resolve(true) : reject(alert('fail to catch'))
		})
	}

	useEffect(() => {
		localStorage.setItem(`pokedex`, JSON.stringify(pokedex.items))
	}, [pokedex])

	return <LocaleContext.Provider value={{ pokedex, setPokedex, releasePokemon, catchPokemon }}>{children}</LocaleContext.Provider>
}
