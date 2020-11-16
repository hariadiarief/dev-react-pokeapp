import React, { Component, createContext, useState } from 'react'

export const LocaleContext = createContext()
export const LocaleContextConsumer = LocaleContext.Consumer

export default function LocaleContextProvider({ children }) {
	const [pokeballs, setPokeballs] = useState([])

	const updatePokeballs = (params) => {
		setPokeballs([...pokeballs, params])
	}

	return <LocaleContext.Provider value={{ pokeballs, setPokeballs }}>{children}</LocaleContext.Provider>
}
