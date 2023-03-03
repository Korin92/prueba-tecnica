import styled from 'styled-components'

type CardProps = {
	width?: string
	height?: string
	minWidth?: string
}

export const Card = styled.div<CardProps>`
	width: ${({ width }) => (width ? width : '261px')};
	height: ${({ height }) => (height ? height : '386px')};
	border-radius: 16px;
	overflow: hidden;
	min-width: ${({ minWidth }) => (minWidth ? minWidth : ' 261px')};
	margin-left: 14px;
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		transform: scale(1.05);
		border-radius: 16px;
		opacity: 0.59;
	}
`

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 10px;
`
