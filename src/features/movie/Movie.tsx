import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Film } from '../../modules/film/models/Film'
import {
	MovieContainer,
	Poster,
	Container,
	Button,
	InfoMovie,
	Image,
	Paragraph,
	Title,
	ContainerButton,
} from './style'
import buttonAdd from '../../assets/btnAdd.png'
import buttonRemove from '../../assets/btnRemove.png'
import star from '../../assets/star.png'
import {
	getGenre,
	addMovieToFav,
	deleteMovieToFav,
} from '@/modules/film/services/FilmService'
import { CustomButton } from '@/components/button/style'

type HomeProps = {
	movie: Film
	token: string
	moviesUser: string[]
}

export function Movie({ movie, token, moviesUser }: HomeProps) {
	const isMovieUser = moviesUser?.find((m) => m === movie.id)
	const [genreName, setGenreName] = useState<string>('')
	const [fav, setFav] = useState<boolean>(!isMovieUser)

	useEffect(() => {
		const getGenreName = async (id: string) => {
			const response = await getGenre(token, id)
				.then((res) => {
					if (!res) return
					return res.name
				})
				.then((data) => {
					return data
				})
			if (!response) return
			setGenreName(response)
		}

		getGenreName(movie.genre)
	}, [])

	const handleAddMovie = async () => {
		setFav(!fav)
		await addMovieToFav(token, movie.id)
			.then((res) => res)
			.then((data) => data)
	}

	const handleRemoveMovie = async () => {
		setFav(!fav)
		await deleteMovieToFav(token, movie.id)
			.then((res) => res)
			.then((data) => data)
	}

	return (
		<MovieContainer>
			<Poster imageSrc={movie.poster}>
				<CustomButton backgroundColor="#fff" color="#000" margin="0 20px 40px">
					Tráiler
				</CustomButton>
				<CustomButton margin="0 50px 40px 0">Play</CustomButton>
			</Poster>
			<Container>
				<ContainerButton>
					<Button
						onClick={fav ? handleAddMovie : handleRemoveMovie}
						imageSrc={fav ? buttonAdd.src : buttonRemove.src}
					></Button>
					<p>{!fav ? 'Remove from my list' : 'Add to my List'}</p>
				</ContainerButton>
				<InfoMovie>
					<Paragraph style={{ display: 'flex', alignItems: 'center' }}>
						Rating:{' '}
						{movie.rating &&
							Array.from({ length: movie.rating }).map((_, index) => (
								<Image src={star.src} alt={'star'} />
							))}
					</Paragraph>
					<Paragraph style={{ display: 'flex', alignItems: 'center' }}>
						Cast: {movie.cast}
					</Paragraph>
					<Paragraph style={{ display: 'flex', alignItems: 'center' }}>
						Genre: {genreName}
					</Paragraph>
					<Title>{movie.title.toUpperCase()}</Title>
					<Paragraph style={{ display: 'flex', alignItems: 'center' }}>
						{movie.description}
					</Paragraph>
				</InfoMovie>
			</Container>
		</MovieContainer>
	)
}
