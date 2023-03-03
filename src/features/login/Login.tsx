import React, { useState } from 'react'
import { Background, CardWrapper, Form } from './style'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { LoggedUser } from '../../modules/login/models/Login'
import { useRouter } from 'next/router'
import { loginService } from '../../modules/login/services/LoginService'

export function Login() {
	const [loggedUser, setLoggedUser] = useState<LoggedUser>({
		email: '',
		password: '',
	})
	const [errorMessage, setErrorMessage] = useState<string>('')
	const router = useRouter()

	const submit = async (e: any) => {
		e.preventDefault()

		if (await loginService(loggedUser)) {
			router.push('/')
		} else {
			setErrorMessage('credenciales inválidas')
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoggedUser(
			Object.assign({ ...loggedUser }, { [e.target.name]: e.target.value })
		)
	}

	return (
		<Background>
			<CardWrapper>
				<Form>
					<Input
						type="text"
						name="email"
						placeholder="Username"
						onChange={handleChange}
					/>
					<Input
						type="password"
						name="password"
						placeholder="Password"
						onChange={handleChange}
					/>
					<Button onClick={submit}>Sign In</Button>
				</Form>
				{errorMessage && <p>{errorMessage}</p>}
			</CardWrapper>
		</Background>
	)
}
