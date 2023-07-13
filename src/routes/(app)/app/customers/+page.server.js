import {
	ALL_CUSTOMER_RECORDS,
	CREATE_CUSTOMER_RECORD,
	UPDATE_CUSTOMER_RECORD,
	DELETE_CUSTOMER_RECORD
} from '$lib/schema.js';
import { backendApi } from '$lib/server/secrets.js';

export const load = async ({ fetch, cookies }) => {
	const token = cookies.get('session');

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
		customers: getCustomers(token)
	};
};

export const actions = {
	createCustomerRecord: async ({ fetch, cookies, request }) => {
		const token = cookies.get('session');

		const formData = await request.formData();

		const name = formData.get('name');
		const priority = formData.get('priority');
		const phone = formData.get('phone');
		const trip = formData.get('trip');
		const _package = formData.get('package');

		const { query } = CREATE_CUSTOMER_RECORD;

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				query,
				variables: {
					name,
					priority,
					phone,
					trip,
					package: _package
				}
			})
		};

		const res = await fetch(backendApi, options).then((res) => res.json());

		if (res.data !== null && res.data.create_customer_record === true) {
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
	updateCustomerRecord: async ({ fetch, cookies, url }) => {
		const token = cookies.get('session');

		const id = url.searchParams.get('id');
		const name = url.searchParams.get('name');
		const priority = url.searchParams.get('priority');
		const phone = url.searchParams.get('phone');
		const trip = url.searchParams.get('trip');
		const _package = url.searchParams.get('package');

		const { query } = UPDATE_CUSTOMER_RECORD;

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				query,
				variables: {
					id,
					name,
					priority,
					phone,
					trip,
					package: _package
				}
			})
		};

		const res = await fetch(backendApi, options).then((res) => res.json());

		if (res.data !== null && res.data.update_customer_record === true) {
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
	deleteCustomerRecord: async ({ fetch, cookies, url }) => {
		const token = cookies.get('session');

		const id = url.searchParams.get('id');

		const { query } = DELETE_CUSTOMER_RECORD;

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

		if (res.data !== null && res.data.delete_customer_record === true) {
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
