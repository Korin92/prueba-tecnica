import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { Film } from '../../modules/film/models/Film'
import { Card, Image } from './style'

interface MovieCardProps {
	movie: Film
	width?: string
	height?: string
	minWidth?: string
}

const MovieCard: React.FC<MovieCardProps> = ({
	movie,
	width,
	height,
	minWidth,
}) => {
	const router = useRouter()
	const handleMovie = (id: string) => {
		router.push(`/movies/${id}`)
	}
	return (
		<Card
			width={width}
			height={height}
			minWidth={minWidth}
			onClick={() => handleMovie(movie.id)}
		>
			<Image
				referrerPolicy="no-referrer"
				src={movie.thumbnail}
				alt={movie.title}
			/>
		</Card>
	)
}

export default MovieCard
