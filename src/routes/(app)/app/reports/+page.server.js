import { ALL_AUTO_REPORTS_RECORDS } from '$lib/schema.js'
import { backendApi } from '$lib/server/secrets.js'

export const load = ({ fetch, cookies }) => {
	const token = cookies.get('session')

	const getReports = async (token) => {
		const { query } = ALL_AUTO_REPORTS_RECORDS

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ query })
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		return res
	}

	return {
		reports: getReports(token)
	}
}
