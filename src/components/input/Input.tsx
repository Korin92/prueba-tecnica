import React, { InputHTMLAttributes } from 'react'
import { InputWrapper } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

const Input = ({ label, ...rest }: InputProps) => {
	return (
		<>
			<InputWrapper {...rest} />
		</>
	)
}

export default Input
