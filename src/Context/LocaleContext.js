import React, { Component, createContext, useState } from 'react'

export const LocaleContext = createContext()
export const LocaleContextConsumer = LocaleContext.Consumer

export default function LocaleContextProvider({ children }) {
	const [pokedex, setPokedex] = useState([])

	const updatePokedex = (params) => {
		setPokedex([...pokedex, params])
	}

	return <LocaleContext.Provider value={{ pokedex, setPokedex }}>{children}</LocaleContext.Provider>
}
