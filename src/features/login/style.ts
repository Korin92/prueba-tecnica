import styled from 'styled-components'
import bg from '../../assets/background.png'

export const Background = styled.div`
	background-image: url(${bg.src});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`
export const CardWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 352px;
	height: 394px;
	left: 1178px;
	top: 203px;
	margin-right: 8vw;
	background: #000000;
	border-radius: 16px;
	& p {
		color: #fff;
		height: auto;
	}
	@media (max-width: 768px) {
		margin-right: 14px;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const CardTitle = styled.h2`
	font-size: 24px;
	margin: 0 0 16px;
`
