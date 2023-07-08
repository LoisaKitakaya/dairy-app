export const actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = await url.searchParams.get('theme');

		if (theme) {
			cookies.set('appTheme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}
	}
};
