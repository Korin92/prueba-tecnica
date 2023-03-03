import { Film } from '@/modules/film/models/Film'
import React, { useState, useEffect } from 'react'
import CarouselItem from './CarouselItem'
import { CustomButton } from '../button/style'
import Avatar from '../avatar/Avatar'
import {
	Container,
	ButtonContainer,
	Slide,
	ActiveButton,
	InactiveButton,
	Title,
} from './style'

interface CarouselProps {
	movies: Film[]
	handlerLogout: () => void
}

const Carousel: React.FC<CarouselProps> = ({ movies, handlerLogout }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((currentSlide + 1) % movies.length)
		}, 5000)

		return () => clearInterval(interval)
	}, [currentSlide, movies])

	const handleClick = (index: number) => {
		setCurrentSlide(index)
	}

	return (
		<>
			<Container>
				<Avatar onClick={handlerLogout} />
				{movies.map((image, index) => (
					<React.Fragment key={index}>
						<CarouselItem
							src={image.poster}
							index={index}
							currentSlide={currentSlide}
							title={image.title}
							description={image.description}
							id={image.id}
						/>
					</React.Fragment>
				))}
				<ButtonContainer>
					{movies.map((movie, index) => (
						<React.Fragment key={index}>
							{currentSlide === index ? (
								<ActiveButton
									key={movie.id}
									isActive={true}
									onClick={() => handleClick(index)}
								/>
							) : (
								<InactiveButton
									key={movie.id}
									isActive={false}
									onClick={() => handleClick(index)}
								/>
							)}
						</React.Fragment>
					))}
				</ButtonContainer>
			</Container>
		</>
	)
}

export default Carousel
