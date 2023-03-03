import React from 'react'
import styled from 'styled-components'
import avatarImage from '../../assets/avatar.png'
import { CustomButton } from '../button/style'
import Image from 'next/image'
import { AvatarContainer } from './style'

type AvatarContainerProps = {
	onClick: () => void
}

const Avatar: React.FC<AvatarContainerProps> = ({ onClick }) => {
	return (
		<AvatarContainer avatarImage={avatarImage.src}>
			<div className="user-menu">
				<CustomButton
					onClick={onClick}
					right="0"
					position="absolute"
					top="50px"
					left={'none'}
				>
					Sing out
				</CustomButton>
			</div>
		</AvatarContainer>
	)
}

export default Avatar
