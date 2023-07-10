import { ALL_PRODUCTION_RECORDS } from '$lib/schema.js';
import { backendApi } from '$lib/server/secrets.js';

export const load = ({ fetch, cookies }) => {
	const token = cookies.get('session');

	const getProduction = async (token) => {
		const { query } = ALL_PRODUCTION_RECORDS;

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ query })
		};

		const res = await fetch(backendApi, options).then((res) => res.json());

		return res;
	};

	return {
		production: getProduction(token)
	};
};
