import Home from 'Pages/Home'
import DetailPokemon from 'Pages/DetailPokemon'
import Collection from 'Pages/Collection'

export const publicRoutes = [
	{
		component: Home,
		path: '/',
		exact: true,
	},
	{
		component: DetailPokemon,
		path: '/pokemon/:id',
		exact: true,
	},
	{
		component: Collection,
		path: '/pokedex',
		exact: true,
	},
]
