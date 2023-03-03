import styled from 'styled-components'

type PosterProps = {
	imageSrc: string
}

type ButtonProps = {
	imageSrc: string
}

export const MovieContainer = styled.div`
	background-color: #222222;
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: auto;
`

export const Poster = styled.div<PosterProps>`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	width: 100vw;
	height: 800px;
	object-fit: cover;
	background-image: ${({ imageSrc }) => `url(${imageSrc})`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`

export const Container = styled.div`
	background-color: #222222;
	height: auto;
	margin: 20px 8vw 0;
	padding-bottom: 80px;
`
export const Button = styled.button<ButtonProps>`
	height: 40px;
	width: 40px;
	background-image: ${({ imageSrc }) => `url(${imageSrc})`};
	background-position: center;
	background-color: transparent;
	border: none;
	margin-bottom: 8px;
	cursor: pointer;
`
export const InfoMovie = styled.div`
	margin-top: 20px;
`
export const Paragraph = styled.p`
	color: #fff;
	font-size: 16px;
	font-family: 'Roboto-condensed';
	line-height: 18.75px;
	margin-bottom: 4px;
	width: 65vw;
`

export const Image = styled.img`
	width: 20px;
	height: 20;
	object-fit: cover;
	margin: 4px;
`

export const Title = styled.h2`
	font-family: 'Roboto-condensed';
	font-style: normal;
	font-weight: 700;
	font-size: 128px;
	line-height: 130px;
	color: #fff;
	margin: 20px 0;
	margin-left: -6px;
`

export const ContainerButton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 130px;

	& > p {
		color: #fff;
		font-size: 16px;
		font-family: 'Roboto-condensed';
		line-height: 18.75px;
		margin-bottom: 4px;
	}
`
