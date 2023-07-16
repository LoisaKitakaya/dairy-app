import {
	ALL_PRODUCTION_RECORDS,
	CREATE_PRODUCTION_RECORD,
	UPDATE_PRODUCTION_RECORD,
	DELETE_PRODUCTION_RECORD
} from '$lib/schema.js'
import { backendApi } from '$lib/server/secrets.js'

export const load = ({ fetch, cookies }) => {
	const token = cookies.get('session')

	const getProduction = async (token) => {
		const { query } = ALL_PRODUCTION_RECORDS

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ query })
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		return res
	}

	return {
		production: getProduction(token)
	}
}

export const actions = {
	createProdRecord: async ({ fetch, cookies, request }) => {
		const token = cookies.get('session')

		const formData = await request.formData()

		const name = formData.get('name')
		const morning_production = formData.get('morning')
		const afternoon_production = formData.get('noon')
		const evening_production = formData.get('evening')
		const production_date = formData.get('date')

		const { query } = CREATE_PRODUCTION_RECORD

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				query,
				variables: {
					name,
					morning_production,
					afternoon_production,
					evening_production,
					production_date
				}
			})
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		if (res.data !== null && res.data.create_production_record === true) {
			return {
				success: true,
				message: 'Record created successfully.'
			}
		} else {
			return {
				success: false,
				message: res.errors[0].message
			}
		}
	},
	updateProdRecord: async ({ fetch, cookies, url }) => {
		const token = cookies.get('session')

		const id = url.searchParams.get('id')
		const name = url.searchParams.get('name')
		const morning_production = url.searchParams.get('morning')
		const afternoon_production = url.searchParams.get('noon')
		const evening_production = url.searchParams.get('evening')
		const production_date = url.searchParams.get('date')

		const { query } = UPDATE_PRODUCTION_RECORD

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				query,
				variables: {
					id,
					name,
					morning_production,
					afternoon_production,
					evening_production,
					production_date
				}
			})
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		if (res.data !== null && res.data.update_production_record === true) {
			return {
				success: true,
				message: 'Record updated successfully.'
			}
		} else {
			return {
				success: false,
				message: res.errors[0].message
			}
		}
	},
	deleteProdRecord: async ({ fetch, cookies, url }) => {
		const token = cookies.get('session')

		const id = url.searchParams.get('id')

		const { query } = DELETE_PRODUCTION_RECORD

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

		if (res.data !== null && res.data.delete_production_record === true) {
			return {
				success: true,
				message: 'Record deleted successfully.'
			}
		} else {
			return {
				success: false,
				message: res.errors[0].message
			}
		}
	}
}
