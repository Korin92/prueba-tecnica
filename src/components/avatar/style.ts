import styled from 'styled-components'

type AvatarContainerProps = {
	avatarImage: string
}

export const AvatarContainer = styled.div<AvatarContainerProps>`
	position: absolute;
	top: 10px;
	right: 20px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #ccc;
	background-image: ${({ avatarImage }) => `url(${avatarImage})`};
	z-index: 10;

	&:hover .user-menu {
		display: block;
	}

	.user-menu {
		display: none;

		position: absolute;
		right: 0;

		height: 90px; // 40 menu + 50 button
		width: 320px; // button(s)
	}
`
