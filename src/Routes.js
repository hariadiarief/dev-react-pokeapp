import Home from 'Pages/Home'
import DetailPokemon from 'Pages/DetailPokemon'

export const publicRoutes = [
	{
		component: Home,
		name: 'Home',
		route: '/',
	},
	{
		component: DetailPokemon,
		name: 'Detail',
		route: '/:id',
	},
]
