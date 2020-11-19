import React, { useState, useEffect, useContext, Fragment } from 'react'
import Modal from 'react-modal'

import { LocaleContext } from 'Context/LocaleContext'
import Alert from 'Services/Alert'
import { Layout, Meta } from 'Components'

import ImgLoader from 'Assets/loader.gif'
import ImgBroken from 'Assets/broken.png'
import ImgPokeBallFilled from 'Assets/pokeball-filled.png'

export default function DetailPokemon({ match }) {
	const localeContext = useContext(LocaleContext)
	const [detailPokemon, setDetailPokemon] = useState()
	const [selectedPokemon, setSelectedPokemon] = useState(null)
	const [isCollapsed, SetIsCollapsed] = useState(true)

	useEffect(() => {
		const fetchPokemonDetail = async () => {
			fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
				.then((response) => response.json())
				.then((json) => {
					setDetailPokemon(json)
				})
		}
		fetchPokemonDetail()
	}, [match.params.id])

	return (
		<Fragment>
			<Meta title={detailPokemon?.name.charAt(0).toUpperCase() + detailPokemon?.name.slice(1)} />

			<Layout>
				<div className='container detail'>
					<div className='detail__sprites'>
						{localeContext.pokedex.items.filter((item) => item.id === detailPokemon?.id).length === 0 ? null : (
							<button className='home__grid__item__save' style={{ backgroundColor: 'red' }}>
								<img src={ImgPokeBallFilled} alt='poke-ball' />
							</button>
						)}

						<div className='detail__title'>{detailPokemon?.name}</div>
						<img
							className='detail__sprites__img'
							src={detailPokemon?.sprites.front_default ?? ImgLoader}
							onError={(e) => {
								e.target.onError = null
								e.target.src = ImgBroken
							}}
							alt='sprites.front_default'
						/>

						{localeContext.pokedex.items.filter((item) => item.id === detailPokemon?.id).length === 0 ? null : (
							<div className='detail__possessive'>
								<span>
									you already have this pokemon with the nickname "{localeContext.pokedex.items.find((item) => item.id === detailPokemon?.id).name}". Go to Pokédex to see
									your all collections
								</span>
							</div>
						)}

						{isCollapsed ? null : (
							<table className='detail__table'>
								<tr>
									<th>Info</th>
									<th>Value</th>
								</tr>
								<tr>
									<td>species</td>
									<td>{detailPokemon?.species.name}</td>
								</tr>
								<tr>
									<td>Moves</td>
									<td>{detailPokemon?.moves.map((item) => item.move.name).join(', ')}.</td>
								</tr>
								<tr>
									<td>Types</td>
									<td>{detailPokemon?.types.map((item) => item.type.name).join(', ')}.</td>
								</tr>
								<tr>
									<td>Abilities</td>
									<td>{detailPokemon?.abilities.map((item) => item.ability.name).join(', ')}.</td>
								</tr>
							</table>
						)}
						<div className='detail__collapsing' onClick={() => SetIsCollapsed(!isCollapsed)}>
							{isCollapsed ? 'Show More Detail...' : '~ Show Less Detail ~'}
						</div>
					</div>
					{localeContext.pokedex.items.filter((item) => item.id === parseInt(match.params.id)).length === 0 ? (
						<button
							className='detail__button--catch'
							onClick={() => {
								localeContext.catchPokemon().then((result) => {
									if (result) {
										Alert.success('Yeay you got pokemon 🔥', 'Now you can save its', {
											onProceed: () => {
												setSelectedPokemon({
													id: detailPokemon.id,
													name: detailPokemon.name,
													spiritImage: detailPokemon.sprites.front_default,
												})
											},
											proceedLabel: 'Save',
										})
									}
								})
							}}>
							Catch Pokemon
						</button>
					) : (
						<button
							className='detail__button--release'
							onClick={() => {
								localeContext.releasePokemon(detailPokemon.id)
							}}>
							Release Pokemon
						</button>
					)}
				</div>

				<Modal isOpen={selectedPokemon} onRequestClose={() => setSelectedPokemon(null)} className='modalContainer' overlayClassName='modalOverlayCenter'>
					<form
						onSubmit={(e) => {
							e.preventDefault()
							localeContext
								.savePokemon(selectedPokemon)
								.then((result) => {
									if (result) {
										localeContext.setPokedex((prevState) => ({
											...prevState,
											items: [...prevState.items, selectedPokemon],
										}))
										setSelectedPokemon(null)
									}
								})
								.catch((err) => alert(err))
						}}>
						<input type='text' value={selectedPokemon?.name} onChange={({ target: { value } }) => setSelectedPokemon({ ...selectedPokemon, name: value })} />
						<button type='submit'>Save</button>
					</form>
				</Modal>
			</Layout>
		</Fragment>
	)
}
