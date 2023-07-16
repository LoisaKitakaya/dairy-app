export const load = async ({ parent }) => {
	const { user } = await parent()

	return { user }
}

export const actions = {
	logout: async ({ url, cookies }) => {
		const move = await await url.searchParams.get('move')

		if (move) {
			cookies.set('session', '', {
				path: '/',
				expires: new Date(0)
			})
		}
	}
}
