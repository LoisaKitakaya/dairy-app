import {
	ALL_EXPENSE_RECORDS,
	CREATE_EXPENSE_RECORD,
	UPDATE_EXPENSE_RECORD,
	DELETE_EXPENSE_RECORD
} from '$lib/schema.js'
import { backendApi } from '$lib/server/secrets.js'

export const load = ({ fetch, cookies }) => {
	const token = cookies.get('session')

	const getExpenses = async (token) => {
		const { query } = ALL_EXPENSE_RECORDS

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ query })
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		return res
	}

	const categories = [
		'Rent Expenses',
		'Utilities Expenses',
		'Salaries and Wages',
		'Raw Materials Expenses',
		'Direct Labor Expenses',
		'Manufacturing Overhead Expenses',
		'Packaging Expenses',
		'Shipping Expenses'
	]

	return {
		expenses: getExpenses(token),
		categories
	}
}

export const actions = {
	createExpRecord: async ({ fetch, cookies, request }) => {
		const token = cookies.get('session')

		const formData = await request.formData()

		const item = formData.get('item')
		const category = formData.get('category')
		const amount = formData.get('amount')
		const date_of_action = formData.get('date')

		const { query } = CREATE_EXPENSE_RECORD

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				query,
				variables: {
					item,
					category,
					amount,
					date_of_action
				}
			})
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		if (res.data !== null && res.data.create_expense_record === true) {
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
	updateExpRecord: async ({ fetch, cookies, url }) => {
		const token = cookies.get('session')

		const id = url.searchParams.get('id')
		const item = url.searchParams.get('item')
		const category = url.searchParams.get('category')
		const amount = url.searchParams.get('amount')
		const date_of_action = url.searchParams.get('date')

		const { query } = UPDATE_EXPENSE_RECORD

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				query,
				variables: {
					id,
					item,
					category,
					amount,
					date_of_action
				}
			})
		}

		const res = await fetch(backendApi, options).then((res) => res.json())

		if (res.data !== null && res.data.update_expense_record === true) {
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
	deleteExpRecord: async ({ fetch, cookies, url }) => {
		const token = cookies.get('session')

		const id = url.searchParams.get('id')

		const { query } = DELETE_EXPENSE_RECORD

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

		if (res.data !== null && res.data.delete_expense_record === true) {
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
