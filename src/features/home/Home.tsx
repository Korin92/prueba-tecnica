import React, { useEffect, useState } from 'react'
import { Film } from '../../modules/film/models/Film'
import { Genre } from '../../modules/film/models/Genre'
import Carousel from '../../components/carousel/Carousel'
import {
	Container,
	Title,
	ContainerCard,
	ContainerButton,
	ContainerSlider,
} from './style'
import { useRouter } from 'next/router'
import { CustomButton } from '@/components/button/style'
import { logoutService } from '@/modules/login/services/LoginService'
import MovieCard from '../../components/card/MovieCard'
import Slider from '../../components/slider/Slider'
import { GenreType } from '../../modules/film/enums/Genres'
import { getGenre } from '@/modules/film/services/FilmService'

type HomeProps = {
	movies: Film[]
	token: string
	genres: Genre[]
	moviesUser: string[]
}

export function Home({ movies, token, genres, moviesUser }: HomeProps) {
	const router = useRouter()
	const filter = movies
		? movies.filter((element) => element.highlighted === true)
		: []

	const handlerLogout = async () => {
		await logoutService(token).then((res) => res && router.push('/login'))
	}

	const [comedias, setComedias] = useState<Film[]>([])
	const [dramas, setDramas] = useState<Film[]>([])
	const [thrillers, setThrillers] = useState<Film[]>([])
	const [comingSon, setComingSon] = useState<Film[]>([])
	const [genreName, setGenreName] = useState<string>('')
	const [favs, setFavs] = useState<Film[]>([])

	useEffect(() => {
		const comediasId = genres.find((genre) => genre.name === GenreType.Comedy)
		const dramasId = genres.find((genre) => genre.name === GenreType.Drama)
		const thrillersId = genres.find(
			(genre) => genre.name === GenreType.Thriller
		)
		const comingSon = movies.filter(
			(movie) => movie.availableDate > new Date().toISOString()
		)

		setComedias(movies.filter((movie: Film) => movie.genre === comediasId?.id))
		setDramas(movies.filter((movie: Film) => movie.genre === dramasId?.id))
		setThrillers(
			movies.filter((movie: Film) => movie.genre === thrillersId?.id)
		)
		setComingSon(comingSon)
	}, [])

	useEffect(() => {
		const favs = movies.filter((movie) => {
			return moviesUser.includes(movie.id)
		})
		setFavs(favs)
	}, [movies])

	return (
		<>
			<Carousel movies={filter} handlerLogout={handlerLogout} />
			<Container>
				<ContainerButton>
					<CustomButton
						width="125px"
						margin="0 16px 0 0"
						backgroundColor={genreName === GenreType.Comedy ? '' : '#fff'}
						color={genreName === GenreType.Comedy ? '' : '#000'}
						onClick={() => {
							if (genreName !== '') {
								setGenreName('')
							} else {
								setGenreName(GenreType.Comedy)
							}
						}}
					>
						Comedy
					</CustomButton>
					<CustomButton
						width="125px"
						margin="0 16px 0 0"
						backgroundColor="#fff"
						color="#000"
						onClick={() => {
							if (genreName !== '') {
								setGenreName('')
							} else {
								setGenreName(GenreType.Drama)
							}
						}}
					>
						Drama
					</CustomButton>
					<CustomButton
						width="125px"
						margin="0 16px 0 0"
						backgroundColor="#fff"
						color="#000"
						onClick={() => {
							if (genreName !== '') {
								setGenreName('')
							} else {
								setGenreName(GenreType.Thriller)
							}
						}}
					>
						Thrillers
					</CustomButton>
				</ContainerButton>
				<ContainerSlider>
					{genreName !== '' && genreName !== GenreType.Comedy ? (
						''
					) : (
						<ContainerCard>
							<Title>Comedy</Title>
							<div style={{ display: 'flex' }}>
								<Slider>
									<div style={{ minWidth: '30px' }} />
									{comedias.map((c) => (
										<MovieCard key={c.id} movie={c} />
									))}
									<div style={{ minWidth: '30px' }} />
								</Slider>
							</div>
						</ContainerCard>
					)}
					{genreName !== '' && genreName !== GenreType.Drama ? (
						''
					) : (
						<ContainerCard>
							<Title>Drama</Title>
							<div style={{ display: 'flex' }}>
								<Slider>
									<div style={{ minWidth: '30px' }} />
									{dramas.map((d) => (
										<MovieCard key={d.id} movie={d} />
									))}
									<div style={{ minWidth: '30px' }} />
								</Slider>
							</div>
						</ContainerCard>
					)}
					{genreName !== '' && genreName !== GenreType.Thriller ? (
						''
					) : (
						<ContainerCard>
							<Title>Thrillers</Title>
							<div>
								<Slider>
									<div style={{ minWidth: '30px' }} />
									{thrillers.map((t) => (
										<MovieCard key={t.id} movie={t} />
									))}
									<div style={{ minWidth: '30px' }} />
								</Slider>
							</div>
						</ContainerCard>
					)}
					<ContainerCard>
						<Title>Coming Soon</Title>
						<div>
							<Slider>
								<div style={{ minWidth: '30px' }} />
								{comingSon.map((c) => (
									<MovieCard
										minWidth="500px"
										width="500px"
										height="260px"
										key={c.id}
										movie={c}
									/>
								))}
								<div style={{ minWidth: '30px' }} />
							</Slider>
						</div>
					</ContainerCard>
					{favs.length ? (
						<ContainerCard>
							<Title>My List</Title>
							<div>
								<Slider>
									<div style={{ minWidth: '30px' }} />
									{favs.map((f) => (
										<MovieCard key={f.id} movie={f} />
									))}
									<div style={{ minWidth: '30px' }} />
								</Slider>
							</div>
						</ContainerCard>
					) : null}
				</ContainerSlider>
			</Container>
		</>
	)
}
