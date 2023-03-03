import type { NextApiRequest, NextApiResponse } from 'next'
import { Film } from '../../../../modules/film/models/Film'
import { API_URL } from '../../settings'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Film>
) {
	const { id } = req.body
	const apiUrl = `${API_URL}/user/list`
	const token = req.headers['authorization']

	if (!token) return

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			accept: 'application/json',
		},
		body: JSON.stringify({
			id: id,
		}),
	})
		.then((res) => {
			return res.json()
		})
		.then((dta) => {
			return dta
		})

	res.status(200).json(response)
}
