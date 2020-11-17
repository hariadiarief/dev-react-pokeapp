import React, { createContext, useEffect, useState } from 'react'

export const LocaleContext = createContext()
export const LocaleContextConsumer = LocaleContext.Consumer

export default function LocaleContextProvider({ children }) {
	const [pokedex, setPokedex] = useState({
		isLoading: false,
		items: JSON.parse(localStorage.getItem('pokedex')) ?? [],
	})

	const releasePokemon = async (pokeId) => {
		setPokedex((prevState) => ({ ...prevState, items: pokedex.items.filter((item) => item.id !== pokeId) }))
	}

	useEffect(() => {
		localStorage.setItem(`pokedex`, JSON.stringify(pokedex.items))
	}, [pokedex])

	return <LocaleContext.Provider value={{ pokedex, setPokedex, releasePokemon }}>{children}</LocaleContext.Provider>
}
