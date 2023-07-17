import { REQUEST_RESET } from '$lib/schema.js'
import { backendApi } from '$lib/server/secrets.js'

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData()

		const email = form.get('email')

		const { query } = REQUEST_RESET

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query, variables: { email } })
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		if (res.data !== null && res.data.request_reset) {
			return {
				success: true,
				message: res.data.request_reset.message
			}
		} else {
			return {
				success: false,
				message: res.errors[0].message
			}
		}
	}
}
