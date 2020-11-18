import React from 'react'
import { confirmAlert } from 'react-confirm-alert'

import { ReactComponent as IconClose } from 'Assets/icon/close.svg'
import ImgInfo from 'Assets/icon/alert-info.png'
import ImgSuccess from 'Assets/icon/alert-success.png'
import ImgFailed from 'Assets/icon/alert-failed.png'
import ImgWarning from 'Assets/icon/alert-failed.png'

export default class Alert {
	static info(title, message, config = null) {
		const onProceed = config?.onProceed
		const proceedLabel = config?.proceedLabel

		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='alert-toaster'>
						<div className='alert-toaster__content'>
							<img src={ImgInfo} alt='' />
							<div className='alert-toaster__content__desc--info'>
								<span>{title}</span>
								<b>{message}</b>
								{!config ? null : <button onClick={onProceed}>{proceedLabel}</button>}
							</div>
						</div>
						<IconClose onClick={onClose} />
					</div>
				)
			},
		})
	}

	static success(title, message, config = null) {
		const onProceed = config?.onProceed
		const proceedLabel = config?.proceedLabel

		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='alert-toaster'>
						<div className='alert-toaster__content'>
							<img src={ImgSuccess} alt='' />
							<div className='alert-toaster__content__desc--success'>
								<span>{title}</span>
								<b>{message}</b>
								{!config ? null : <button onClick={onProceed}>{proceedLabel}</button>}
							</div>
						</div>
						<IconClose onClick={onClose} />
					</div>
				)
			},
		})
	}

	static warning(title, message, config = null) {
		const onProceed = config?.onProceed
		const proceedLabel = config?.proceedLabel

		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='alert-toaster'>
						<div className='alert-toaster__content'>
							<img src={ImgWarning} alt='' />
							<div className='alert-toaster__content__desc--warning'>
								<span>{title}</span>
								<b>{message}</b>
								{!config ? null : (
									<button
										onClick={() => {
											onProceed()
											onClose()
										}}>
										{proceedLabel}
									</button>
								)}
							</div>
						</div>
						<IconClose onClick={onClose} />
					</div>
				)
			},
		})
	}
	static failed(title, message, config = null) {
		const onProceed = config?.onProceed
		const proceedLabel = config?.proceedLabel

		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='alert-toaster'>
						<div className='alert-toaster__content'>
							<img src={ImgFailed} alt='' />
							<div className='alert-toaster__content__desc--failed'>
								<span>{title}</span>
								<b>{message}</b>
								{!config ? null : <button onClick={onProceed}>{proceedLabel}</button>}
							</div>
						</div>
						<IconClose onClick={onClose} />
					</div>
				)
			},
		})
	}
}
