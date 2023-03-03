import { useRouter } from 'next/router'
import React from 'react'
import { CustomButton } from '../button/style'
import { Title, Slide, Description, ContainerDescription } from './style'

type Props = {
	src: string
	index: number
	currentSlide: number
	title: string
	description: string
	id: string
}

const CarouselItem: React.FC<Props> = ({
	index,
	src,
	currentSlide,
	title,
	description,
	id,
}) => {
	const router = useRouter()
	const handleMovie = (id: string) => {
		router.push(`/movies/${id}`)
	}
	return (
		<>
			<ContainerDescription currentSlide={currentSlide} index={index}>
				<Title>{title.toUpperCase()}</Title>
				<Description>
					{description}

					{index}
				</Description>
				<CustomButton
					key={index}
					onClick={() => handleMovie(id)}
					color={'#fff'}
					margin={'10px 0 0 0'}
				>
					Discover
				</CustomButton>
			</ContainerDescription>
			<Slide
				key={index}
				src={src}
				alt={`Slide ${index + 1}`}
				currentSlide={currentSlide}
				index={index}
			/>
		</>
	)
}

export default CarouselItem
