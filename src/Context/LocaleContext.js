import React, { createContext, useEffect, useState } from 'react'

import Alert from 'Services/Alert'

export const LocaleContext = createContext()
export const LocaleContextConsumer = LocaleContext.Consumer
export default function LocaleContextProvider({ children }) {
	const [pokedex, setPokedex] = useState({
		isLoading: false,
		items: JSON.parse(localStorage.getItem('pokedex')) ?? [],
	})

	const releasePokemon = (pokeId) => {
		Alert.warning('Sure ??', 'you failed to get pokemon, but you can try again', {
			onProceed: () => setPokedex((prevState) => ({ ...prevState, items: pokedex.items.filter((item) => item.id !== pokeId) })),
			proceedLabel: 'ok',
		})
		// if (window.confirm('Really to release this Pokemon?')) {
		// }
	}

	let catchPokemon = () => {
		return new Promise(async function (resolve, reject) {
			Math.floor(Math.random() * 10) > 5 ? resolve(true) : reject(Alert.failed('Huft 😭😭😭', 'you failed to get pokemon, but you can try again'))
		})
	}

	useEffect(() => {
		localStorage.setItem(`pokedex`, JSON.stringify(pokedex.items))
	}, [pokedex])

	return <LocaleContext.Provider value={{ pokedex, setPokedex, releasePokemon, catchPokemon }}>{children}</LocaleContext.Provider>
}
