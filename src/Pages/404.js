export default function NotFound() {
	return (
		<div className='not-found'>
			<div className='not-found__container'>
				<div className='not-found__desc'>
					<span>404</span>
					<span>UH OH! You're lost.</span>
					<span>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</span>
				</div>
				<button className='not-found__button' onClick={() => this.props}>
					Go to Home
				</button>
			</div>
		</div>
	)
}
