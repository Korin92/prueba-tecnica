import { NextApiRequest, NextApiResponse } from 'next'
import { LoggedUser } from '../../../modules/login/models/Login'
import Cookies from 'cookies'
import { API_URL } from '../settings'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<LoggedUser>
) {
	const cookies = new Cookies(req, res)
	const apiUrl = `${API_URL}/auth/sign-in`
	const { email, password } = req.body

	if (email !== 'jean.sharp@driverevel.com' || password !== '1234') {
		return res.json({ email: '', password: '' })
	}

	await fetch(apiUrl, {
		method: 'POST',
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	})
		.then((res) => {
			return res.json()
		})
		.then((dta) => {
			if (dta.token) {
				cookies.set('authToken', dta.token, {
					httpOnly: true,
				})
			}
		})

	return res.json({
		email: email,
		password: password,
	})

	//res.status(200)
}
