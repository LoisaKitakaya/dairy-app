import { CREATE_USER } from '$lib/schema.js';
import { backendApi } from '$lib/server/secrets.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, fetch }) => {
		const form = await request.formData();

		const username = form.get('username');
		const email = form.get('email');
		const password = form.get('password');

		const { query } = CREATE_USER;

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query, variables: { username, email, password } })
		};

		const res = await fetch(backendApi, options).then((res) => res.json());

		if (res.data !== null && res.data.create_user === true) {
			throw redirect(303, '/login');
		} else {
			return {
				success: false,
				message: res.errors[0].message
			};
		}
	}
};
