import React, { Component, createContext, useState } from 'react'

export const RootContext = createContext()
export const RootContextConsumer = RootContext.Consumer

export default function RootContextProvider({ children }) {
	const [pokeballs, setPokeballs] = useState([])

	const updatePokeballs = (params) => {
		setPokeballs([...pokeballs, params])
	}

	return <RootContext.Provider value={{ pokeballs, updatePokeballs }}>{children}</RootContext.Provider>
}
