import type { NextApiRequest, NextApiResponse } from 'next'
import { Film } from '../../../../../modules/film/models/Film'
import { API_URL } from '../../../settings'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Film>
) {
	console.log('entro al delete')
	const { id } = req.query

	const apiUrl = `${API_URL}/films/user/list/${id}`
	const token = req.headers['authorization']

	if (!token) return

	const response = await fetch(apiUrl, {
		method: 'DELETE',
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

	res.status(200).json(response)
}
