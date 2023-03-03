import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	backgroundColor?: string
	color?: string
	padding?: string
	fontSize?: string
	width?: string
	left?: string
	top?: string
	borderRadius?: string
	position?: string
	zIndex?: string
	margin?: string
	right?: string
}

export const CustomButton = styled.button<IButtonProps>`
	width: ${(props) => props.width || '320px'};
	height: 50px;
	left: ${(props) => props.left || '1194px'};
	top: ${(props) => props.top || '431px'};
	background: ${(props) => props.backgroundColor || '#751b5c'};
	border-radius: ${(props) => props.borderRadius || '16px'};
	border-color: transparent;
	padding: ${(props) => props.padding || '10px'};
	color: ${(props) => props.color || '#FFFFFF'};
	position: ${(props) => props.position || ''};
	z-index: ${(props) => props.zIndex || ''};
	margin: ${(props) => props.margin || ''};
	right: ${(props) => props.right || ''};
	font-family: 'Roboto-condensed';
	cursor: pointer;
`
export const ButtonText = styled.span<IButtonProps>`
	height: 19.3px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	color: ${(props) => props.color || '#FFFFFF'};
`
