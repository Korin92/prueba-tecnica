import { Film } from '@/modules/film/models/Film'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { Movie } from '../../features/movie/Movie'
import { getCookie } from '../../modules/Cookie'
import {
	getMovie,
	getMoviesUser,
} from '../../modules/film/services/FilmService'

export default function MoviePage({
	res,
	token,
	moviesUser,
	isMovieUser,
}: any) {
	return (
		<>
			<Movie movie={res} token={token} moviesUser={moviesUser} />
		</>
	)
}

export async function getServerSideProps(ctx: NextPageContext) {
	const token = getCookie(ctx)

	if (!ctx.query.id || Array.isArray(ctx.query.id)) return

	const res = await getMovie(token, ctx.query.id)
	const moviesUser = await getMoviesUser(token)

	return {
		props: {
			res: res,
			token: token,
			moviesUser: moviesUser,
		},
	}
}
