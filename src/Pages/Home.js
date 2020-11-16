import React, { useState } from 'react'

import { RootContext, RootContextConsumer } from 'Context/RootContext'

export default function Home() {
	const [temp, setTemp] = useState('')

	return (
		<div>
			<RootContextConsumer>
				{(rootContext) => (
					<div>
						<ul>
							{rootContext.pokeballs.map((pokeball) => (
								<li>{pokeball}</li>
							))}
						</ul>
						<input type='text' value={temp} onChange={({ target: { value } }) => setTemp(value)} />
						<button onClick={() => rootContext.updatePokeballs([temp])}>submit</button>
					</div>
				)}
			</RootContextConsumer>
		</div>
	)
}
