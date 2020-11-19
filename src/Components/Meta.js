import Helmet from 'react-helmet'

const defaultTitle = 'Catch Pokemon'
const defaultThumbnail = 'https://raw.githubusercontent.com/hariadiarief/pokeapp/main/src/Assets/pokeball.png'
const defaultURL = 'https://catchpokemon.netlify.app/'
const defaultKeyword = 'pokemon, pokeapp, catch pokemon, pokemon go'

const Meta = ({ title = '', description, url = defaultURL, image = defaultThumbnail, keywords = defaultKeyword }) => {
	return (
		<Helmet>
			<title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
			<meta name='title' content={title} />
			<meta name='description' content={description} />

			<meta property='og:type' content='website' />
			<meta property='og:url' content={url} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />

			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={url} />
			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:image' content={image} />

			<meta name='keywords' content={keywords} />
			<meta name='robots' content='index, follow' />
			<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			<meta name='language' content='English' />
			<meta name='revisit-after' content='7 days' />
			<meta name='author' content='Masagus Hariadi Arief' />
		</Helmet>
	)
}

export default Meta
