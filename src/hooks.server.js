import { sequence } from '@sveltejs/kit/hooks'
import { decodeToken } from './lib/server/decode'
import { redirect } from '@sveltejs/kit'

export const handleTheme = async ({ event, resolve }) => {
	let theme = null

	const newTheme = event.url.searchParams.get('theme')
	const cookieTheme = event.cookies.get('appTheme')

	if (newTheme) {
		theme = newTheme
	} else if (cookieTheme) {
		theme = cookieTheme
	}

	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
		})
	}

	return await resolve(event)
}

export const handleAuth = async ({ event, resolve }) => {
	const payload = decodeToken(event)

	event.locals.user = payload

	if (event.url.pathname.startsWith('/app')) {
		if (!event.locals.user) {
			throw redirect(303, '/')
		}
	}

	return await resolve(event)
}

export const handle = sequence(handleTheme, handleAuth)
