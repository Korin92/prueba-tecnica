import { NextPageContext } from 'next'
import { parseCookie } from '../common/ParseCookie'

export const getCookie = (ctx: NextPageContext) => {
	if (!ctx.req) return null

	if (!ctx.req.headers.cookie) return null

	const cookie = parseCookie(ctx.req.headers.cookie)

	const parsedCookie = cookie.authToken

	return parsedCookie
}
