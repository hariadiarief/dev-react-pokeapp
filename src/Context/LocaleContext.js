import React, { createContext, useState } from 'react'

export const LocaleContext = createContext()
export const LocaleContextConsumer = LocaleContext.Consumer

export default function LocaleContextProvider({ children }) {
	const [pokedex, setPokedex] = useState({
		isLoading: false,
		items: [
			{ id: 1, name: 'bulbasaur', spiritImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
			{ id: 4, name: 'charmander', spiritImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
			{ id: 8, name: 'wartortle', spiritImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
		],
	})

	return <LocaleContext.Provider value={{ pokedex, setPokedex }}>{children}</LocaleContext.Provider>
}
