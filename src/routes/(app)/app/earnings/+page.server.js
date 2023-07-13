import {
	ALL_CUSTOMER_RECORDS,
	ALL_PAYMENT_RECORDS,
	CREATE_PAYMENT_RECORD,
	UPDATE_PAYMENT_RECORD,
	DELETE_PAYMENT_RECORD
} from '$lib/schema.js';
import { backendApi } from '$lib/server/secrets.js';

export const load = async ({ fetch, cookies }) => {
	const token = cookies.get('session');

	const getEarnings = async (token) => {
		const { query } = ALL_PAYMENT_RECORDS;

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ query })
		};

		const res = await fetch(backendApi, options).then((res) => res.json());

		return res;
	};

	const getCustomers = async (token) => {
		const { query } = ALL_CUSTOMER_RECORDS;

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ query })
		};

		const res = await fetch(backendApi, options).then((res) => res.json());

		return res;
	};

	return {
		earnings: getEarnings(token),
		customers: getCustomers(token)
	};
};

export const actions = {
	createPayRecord: async ({ fetch, cookies, request }) => {
		const token = cookies.get('session');

		const formData = await request.formData();

		const name = formData.get('name');
		const amount = formData.get('amount');
		const payment_method = formData.get('method');
		const quantity = formData.get('quantity');
		const payment_date = formData.get('date');

		const { query } = CREATE_PAYMENT_RECORD;

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				query,
				variables: {
					name,
					amount,
					payment_method,
					quantity,
					payment_date
				}
			})
		};

		const res = await fetch(backendApi, options).then((res) => res.json());

		if (res.data !== null && res.data.create_payment_record === true) {
			return {
				success: true,
				message: 'Record created successfully.'
			};
		} else {
			return {
				success: false,
				message: res.errors[0].message
			};
		}
	},
	updatePayRecord: async ({ fetch, cookies, url }) => {
		const token = cookies.get('session');

		const id = url.searchParams.get('id');
		const name = url.searchParams.get('name');
		const amount = url.searchParams.get('amount');
		const payment_method = url.searchParams.get('method');
		const quantity = url.searchParams.get('quantity');
		const payment_date = url.searchParams.get('date');

		const { query } = UPDATE_PAYMENT_RECORD;

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				query,
				variables: {
					id,
					name,
					amount,
					payment_method,
					quantity,
					payment_date
				}
			})
		};

		const res = await fetch(backendApi, options).then((res) => res.json());

		if (res.data !== null && res.data.update_payment_record === true) {
			return {
				success: true,
				message: 'Record updated successfully.'
			};
		} else {
			return {
				success: false,
				message: res.errors[0].message
			};
		}
	},
	deletePayRecord: async ({ fetch, cookies, url }) => {
		const token = cookies.get('session');

		const id = url.searchParams.get('id');

		const { query } = DELETE_PAYMENT_RECORD;

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				query,
				variables: {
					id
				}
			})
		};

		const res = await fetch(backendApi, options).then((res) => res.json());

		if (res.data !== null && res.data.delete_payment_record === true) {
			return {
				success: true,
				message: 'Record deleted successfully.'
			};
		} else {
			return {
				success: false,
				message: res.errors[0].message
			};
		}
	}
};
