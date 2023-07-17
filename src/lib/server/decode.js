import { decode } from 'jsonwebtoken'
import { salt } from './secrets'

export const decodeToken = (event) => {
	const { cookies } = event

	const token = cookies.get('session')

	let payload = null

	if (token) {
		try {
			payload = decode(token, salt)
		} catch (err) {
			console.log(err)
		}

		return payload
	}

	return null
}

export const decodeResetLink = (token) => {
	let payload = null

	try {
		payload = decode(token, salt)
	} catch (err) {
		console.log(err)
	}

	return payload
}
