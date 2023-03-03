import React, { useRef, useState } from 'react'
import { SliderContainer } from './style'

type SliderProps = {
	children: React.ReactNode
}

const Slider: React.FC<SliderProps> = ({ children }: SliderProps) => {
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)
	const [scrollPosition, setScrollPosition] = useState(0)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDragging(true)
		setStartX(e.pageX - e.currentTarget.offsetLeft)
		setScrollLeft(e.currentTarget.scrollLeft)
	}

	const handleScroll = () => {
		const container = containerRef.current
		if (container) {
			const newPosition = container.scrollLeft
			if (newPosition !== scrollPosition) {
				setScrollPosition(newPosition)
			}
		}
	}

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		if (!isDragging) return
		const x = e.pageX - e.currentTarget.offsetLeft
		const walk = (x - startX) * 1.5
		e.currentTarget.scrollLeft = scrollLeft - walk
	}

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setIsDragging(true)
		setStartX(e.touches[0].clientX - e.currentTarget.offsetLeft)
		setScrollLeft(e.currentTarget.scrollLeft)
	}

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (!isDragging) return
		const x = e.touches[0].clientX - e.currentTarget.offsetLeft
		const walk = (x - startX) * 1.5
		e.currentTarget.scrollLeft = scrollLeft - walk
	}

	const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsDragging(false)
	}

	const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
		setIsDragging(false)
	}

	return (
		<SliderContainer
			onScroll={handleScroll}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{children}
		</SliderContainer>
	)
}

export default Slider
