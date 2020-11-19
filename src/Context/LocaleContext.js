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
		Alert.warning('Sure to release pokemon 😕?', 'You will lose this pokemon if you take it off', {
			onProceed: () => setPokedex((prevState) => ({ ...prevState, items: pokedex.items.filter((item) => item.id !== pokeId) })),
			proceedLabel: 'Release',
		})
	}

	let catchPokemon = () => {
		return new Promise(async function (resolve, reject) {
			Math.floor(Math.random() * 10) > 5 ? resolve(true) : reject(Alert.failed('Huft 😭', 'You failed to get pokemon. But no worry, you can try again'))
		})
	}

	useEffect(() => {
		localStorage.setItem(`pokedex`, JSON.stringify(pokedex.items))
	}, [pokedex])

	let savePokemon = (pokemon) => {
		return new Promise(async function (resolve) {
			pokedex.items.filter((item) => item?.name.toLowerCase() === pokemon.name.toLowerCase()).length === 0 ? resolve(true) : resolve(false)
		})
	}

	return <LocaleContext.Provider value={{ pokedex, setPokedex, releasePokemon, catchPokemon, savePokemon }}>{children}</LocaleContext.Provider>
}
