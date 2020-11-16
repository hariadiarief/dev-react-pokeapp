import React, { createContext, useState } from 'react'

export const LocaleContext = createContext()
export const LocaleContextConsumer = LocaleContext.Consumer

export default function LocaleContextProvider({ children }) {
	const [pokedex, setPokedex] = useState('hallo')

	return <LocaleContext.Provider value={{ pokedex, setPokedex }}>{children}</LocaleContext.Provider>
}
