import styled from 'styled-components'

export const SliderContainer = styled.div`
	display: flex;
	white-space: nowrap;
	position: relative;
	height: auto;
	min-height: 426px;
	display: flex;
	align-items: center;
	padding: 4px;
	overflow-x: scroll;
	scroll-padding-left: 30px;
	-webkit-overflow-scrolling: touch;
	scrollbar-width: none;
	padding: 0;
	&::-webkit-scrollbar {
		display: none;
	}
`
