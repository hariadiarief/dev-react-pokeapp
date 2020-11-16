import React, { useState, useContext } from 'react'

import { LocaleContext } from 'Context/LocaleContext'

export default function Home() {
	const [temp, setTemp] = useState('')
	const localContext = useContext(LocaleContext)

	return (
		<div>
			<ul>
				{localContext.pokeballs.map((pokeball) => (
					<li>{pokeball}</li>
				))}
			</ul>
			<form onSubmit={handleSubmit}>
				<input type='text' value={temp} onChange={({ target: { value } }) => setTemp(value)} />
				<button type='submit'>submit</button>
			</form>
		</div>
	)

	function handleSubmit(event) {
		event.preventDefault()
		localContext.setPokeballs([...localContext.pokeballs, temp])
	}
}
