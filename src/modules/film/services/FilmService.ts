import { parseCookie } from '@/common/ParseCookie'
import { API_URL } from '@/modules/settings'
import { NextPageContext } from 'next'
import { Film } from '../models/Film'
import { getCookie } from '../../Cookie'
import { Genre } from '../models/Genre'

export const getAllMovies = async (token: string) => {
	const apiUrl = `${API_URL}/films/movies`

	const res = await fetch(apiUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`,
		},
		credentials: 'include',
	})
		.then((res) => {
			if (res.ok) {
				return res.json()
			}
		})
		.then((data: Film[]) => {
			if (data.length) {
				return data
			}
		})
		.catch((err) => {
			console.log('error', err)
		})

	if (!res) return null

	return res
}

export const getMovie = async (token: string, id: string) => {
	const apiUrl = `${API_URL}/films/movies/${id}`

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
		.then((data: Film) => {
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

export const addMovieToFav = async (token: string, id: string) => {
	const apiUrl = `${API_URL}/films/user/list`

	const res = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`,
		},
		body: JSON.stringify({
			id: id,
		}),
	})
		.then((res) => {
			if (res.ok) {
				return res.json()
			}
		})
		.then((data: string) => {
			console.log('data', data)
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

export const deleteMovieToFav = async (token: string, id: string) => {
	console.log('entro al delete de mi api')
	const apiUrl = `${API_URL}/films/user/list/${id}`

	const res = await fetch(apiUrl, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`,
			accept: 'application/json',
		},
	})
		.then((res) => {
			if (res.ok) {
				return res.json()
			}
		})
		.then((data: string) => {
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

export const getMoviesUser = async (token: string) => {
	console.log('entro a getMovieUser')
	const apiUrl = `${API_URL}/films/user/`

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
		.then((data: string[]) => {
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

export const getGenresMovies = async (token: string) => {
	const apiUrl = `${API_URL}/films/genres`

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
		.then((data: Film[]) => {
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

export const getGenre = async (token: string, id: string) => {
	const apiUrl = `${API_URL}/films/genres/${id}`

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
		.then((data: Genre) => {
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
