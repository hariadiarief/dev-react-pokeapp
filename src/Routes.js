import Home from 'Pages/Home'
import DetailPokemon from 'Pages/DetailPokemon'
import Pokedex from 'Pages/Pokedex'

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
		component: Pokedex,
		path: '/pokedex',
		exact: true,
	},
]
