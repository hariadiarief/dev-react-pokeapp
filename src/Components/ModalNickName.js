import React, { useContext } from 'react'
import Modal from 'react-modal'

import { LocaleContext } from 'Context/LocaleContext'

export default function ModalNickName({ selectedPokemon, setSelectedPokemon }) {
	const localeContext = useContext(LocaleContext)

	const handleSubmitNickname = (e) => {
		e.preventDefault()
		localeContext
			.savePokemon(selectedPokemon)
			.then((result) => {
				if (result) {
					localeContext.setCollection((prevState) => ({
						...prevState,
						items: [...prevState.items, selectedPokemon],
					}))
					setSelectedPokemon(null)
				}
			})
			.catch((err) => alert(err))
	}
	return (
		<Modal isOpen={selectedPokemon} onRequestClose={() => setSelectedPokemon(null)} className='modalContainer' overlayClassName='modalOverlayCenter'>
			<form onSubmit={handleSubmitNickname} className='modal-nickname'>
				<h4>Give Your Pokemon Nickname</h4>
				<input type='text' value={selectedPokemon?.name} onChange={({ target: { value } }) => setSelectedPokemon({ ...selectedPokemon, name: value })} />
				<button type='submit'>Save</button>
			</form>
		</Modal>
	)
}
