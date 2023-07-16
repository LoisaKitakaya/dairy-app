import { AUTHENTICATE_USER } from '$lib/schema.js'
import { backendApi } from '$lib/server/secrets.js'
import { redirect } from '@sveltejs/kit'

export const actions = {
	default: async ({ request, fetch, cookies }) => {
		const form = await request.formData()

		const username = form.get('username')
		const password = form.get('password')

		const { query } = AUTHENTICATE_USER

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query, variables: { username, password } })
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		if (res.data !== null && res.data.authenticate_user) {
			cookies.set('session', res.data.authenticate_user.token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 1
			})

			throw redirect(303, '/app/production')
		} else {
			return {
				success: false,
				message: res.errors[0].message
			}
		}
	}
}
