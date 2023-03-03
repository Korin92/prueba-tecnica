import Head from 'next/head'
import {
	getAllMovies,
	getGenresMovies,
	getMoviesUser,
} from '../modules/film/services/FilmService'
import { Home } from '../features/home/Home'
import { NextPageContext } from 'next'
import { getCookie } from '@/modules/Cookie'
import { Film } from '@/modules/film/models/Film'
import { Genre } from '@/modules/film/models/Genre'
import Footer from '@/components/footer/Footer'

type HomePageProps = {
	movies: Film[]
	token: string
	genres: Genre[]
	moviesUser: string[]
}

export default function HomePage({
	movies,
	token,
	genres,
	moviesUser,
}: HomePageProps) {
	return (
		<>
			<Head>
				<title>Driverevel - Home</title>
				<meta name="description" content="driverevel kata" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Home
				movies={movies}
				token={token}
				genres={genres}
				moviesUser={moviesUser}
			/>
		</>
	)
}

export async function getServerSideProps(ctx: NextPageContext) {
	const token = getCookie(ctx)
	const res = await getAllMovies(token)
	const genres = await getGenresMovies(token)
	const moviesUser = await getMoviesUser(token)
	if (!ctx.req || !ctx.res) return
	if (res === null) {
		ctx.res.writeHead(302, { Location: '/login' })
		ctx.res.end()
	}

	return {
		props: {
			movies: res,
			genres: genres,
			token: token,
			moviesUser: moviesUser,
		},
	}
}
