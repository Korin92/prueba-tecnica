import Cookies from 'cookies'
import { NextApiRequest, NextApiResponse } from 'next'
import { LoggedUser } from '../../../modules/login/models/Login'
import { API_URL } from '../settings'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<LoggedUser>
) {
	const apiUrl = `${API_URL}/sign-out`
	const token = req.headers['authorization']
	const cookies = new Cookies(req, res)

	await fetch(apiUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json()
		})
		.then((dta) => {
			console.log('entro en el if del dta', dta)
			return cookies.set('authToken', null, { expires: new Date(0), path: '/' })
		})

	return res.status(200).json({ email: '', password: '' })
}
