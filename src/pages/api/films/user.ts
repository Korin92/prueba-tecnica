import type { NextApiRequest, NextApiResponse } from 'next'
import { Film } from '../../../modules/film/models/Film'
import { API_URL } from '../settings'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Film[]>
) {
	const apiUrl = `${API_URL}/user`
	const token = req.headers['authorization']

	console.log('entro al handler', token)

	if (!token) return

	const response = await fetch(apiUrl, {
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
			return dta
		})

	console.log('responseUser', response)

	res.status(200).json(response)
}
