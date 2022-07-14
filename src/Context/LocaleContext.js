import React, { createContext, useEffect, useState } from 'react'

import Alert from 'Services/Alert'

export const LocaleContext = createContext()
export const LocaleContextConsumer = LocaleContext.Consumer
export default function LocaleContextProvider({ children }) {
	const [collection, setCollection] = useState({
		isLoading: false,
		items: JSON.parse(localStorage.getItem('collection')) ?? [],
	})

	const releasePokemon = (pokeId) => {
		Alert.warning('Sure to release pokemon 😕?', 'You will lose this pokemon if you take it off', {
			onProceed: () => setCollection((prevState) => ({ ...prevState, items: collection.items.filter((item) => item.id !== pokeId) })),
			proceedLabel: 'Release',
		})
	}

	let catchPokemon = () => {
		return new Promise(async function (resolve, reject) {
			Math.floor(Math.random() * 10) > 5 ? resolve(true) : reject(Alert.failed('Huft 😭', 'You failed to get pokemon. But no worry, you can try again'))
		})
	}

	useEffect(() => {
		localStorage.setItem(`collection`, JSON.stringify(collection.items))
	}, [collection])

	let savePokemon = (pokemon) => {
		return new Promise(async function (resolve, reject) {
			collection.items.filter((item) => item?.name.toLowerCase() === pokemon.name.toLowerCase()).length === 0 ? resolve(true) : reject(new Error(`failed, nickname can't be same`))
		})
	}

	return <LocaleContext.Provider value={{ collection, setCollection, releasePokemon, catchPokemon, savePokemon }}>{children}</LocaleContext.Provider>
}
