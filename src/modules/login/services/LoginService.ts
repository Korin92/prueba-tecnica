import { LoggedUser } from '../models/Login'
import { API_URL } from '@/modules/settings'

export const loginService = async ({ email, password }: LoggedUser) => {
	const apiUrl = `${API_URL}/auth/login`

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
		body: JSON.stringify({
			email,
			password,
		}),
	})
		.then((res) => {
			if (res.ok) {
				return res.json()
			}
		})
		.then((data) => {
			if (data.email && data.password) {
				return true
			} else {
				return false
			}
		})

	return response
}

export const logoutService = async (token: string) => {
	console.log('entro a logout', token)
	const apiUrl = `${API_URL}/auth/logout`

	const res = await fetch(apiUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`,
		},
	})
		.then((res) => {
			if (res.ok) {
				return res.json()
			}
		})
		.then((data) => {
			if (data) {
				return data
			}
		})
		.catch((err) => {
			console.log('error', err)
		})

	if (!res) return

	return res
}
