import { PASSWORD_RESET } from '$lib/schema.js';
import { backendApi } from '$lib/server/secrets.js';
import { decodeResetLink } from '$lib/server/decode.js';

export const actions = {
	default: async ({ request, params }) => {
		const form = await request.formData();

		const new_password = form.get('password');

		const payload = decodeResetLink(params.token);

		const { email, exp } = payload;

		const now = new Date().getTime();
		const linkExpiry = new Date(exp * 1000).getTime();

		if (now < linkExpiry) {
			const { query } = PASSWORD_RESET;

			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query, variables: { new_password, email } })
			};

			const res = await fetch(backendApi, options).then((res) => res.json());

			if (res.data !== null && res.data.password_reset) {
				return {
					success: true,
					message: res.data.password_reset.message
				};
			} else {
				return {
					success: false,
					message: res.errors[0].message
				};
			}
		} else {
			return {
				success: false,
				message: 'The password reset link has expired.'
			};
		}
	}
};
