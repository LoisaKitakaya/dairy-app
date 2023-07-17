import { AUTO_REPORTS_RECORD, DELETE_AUTO_REPORTS_RECORD } from '$lib/schema.js'
import { backendApi } from '$lib/server/secrets.js'
import { redirect } from '@sveltejs/kit'

export const load = ({ fetch, cookies, params }) => {
	const token = cookies.get('session')

	const getReport = async (token) => {
		const { query } = AUTO_REPORTS_RECORD

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ query, variables: { id: params.id } })
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		return res
	}

	return {
		report: getReport(token)
	}
}

export const actions = {
	deleteReport: async ({ fetch, cookies, url }) => {
		const token = cookies.get('session')

		const id = url.searchParams.get('id')

		const { query } = DELETE_AUTO_REPORTS_RECORD

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				query,
				variables: {
					id
				}
			})
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		if (res.data !== null && res.data.delete_auto_reports_record === true) {
			throw redirect(301, '/app/reports')
		} else {
			return {
				success: false,
				message: res.errors[0].message
			}
		}
	}
}
