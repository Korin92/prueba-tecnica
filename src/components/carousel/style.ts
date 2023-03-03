import styled from 'styled-components'
type ItemsProps = {
	currentSlide: number
	index: number
}
export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`

export const Slide = styled.img<ItemsProps>`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: opacity 0.5s ease-in-out;
	display: ${({ currentSlide, index }) =>
		currentSlide === index ? 'inline' : 'none'};
`

export const ButtonContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: center;
	margin-bottom: 24px;
	height: auto;
`

const Button = styled.button<{ isActive: boolean }>`
	background-color: ${({ isActive }) => (isActive ? '#000' : '#ccc')};
	border: none;
	width: 20px;
	height: 10px;
	margin: 0 5px;
	border-radius: 5px;
	cursor: pointer;
`

export const ActiveButton = styled(Button)`
	background-color: #ffffffb2;
	border: none;
	width: 90px;
	height: 6px;
	margin: 0 5px;
	border-radius: 5px;
	cursor: pointer;
`

export const InactiveButton = styled(Button)`
	background-color: #000000b2;
	border: none;
	width: 90px;
	height: 6px;
	margin: 0 5px;
	border-radius: 5px;
	cursor: pointer;
`

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

export const Title = styled.h2`
	color: #fff;
	font-family: 'Roboto-condensed';
	font-style: Bold;
	font-size: 128px;
	line-height: 130px;
	height: auto;
`
export const ContainerDescription = styled.div<ItemsProps>`
	margin-top: 10vh;
	margin-left: 10vw;
	width: 40vw;
	height: auto;
	position: absolute;
	z-index: 3;
	display: ${({ currentSlide, index }) =>
		currentSlide === index ? 'inline' : 'none'};
`
export const Description = styled.span`
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	height: auto;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	line-clamp: 3;
	-webkit-box-orient: vertical;
`
