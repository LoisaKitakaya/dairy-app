// used in production table/page/charts

export const getUniqueNames = (arr) => {
	return [...new Set(arr.map((obj) => obj.name))]
}

export const getUniqueDates = (arr) => {
	return [...new Set(arr.map((obj) => obj.date))]
}

export const filterByName = (arr, name) => {
	return arr.filter((obj) => obj.name === name)
}

export const organizeByName = (arr, names) => {
	return names.map((obj) => [...filterByName(arr, obj)])
}

export const getColor = () => {
	const red = Math.floor(Math.random() * 256)
	const green = Math.floor(Math.random() * 256)
	const blue = Math.floor(Math.random() * 256)

	const color = `rgb(${red}, ${green}, ${blue})`

	return color
}

// chart colors

export const chartColors = [
	{ fg: 'rgb(255, 0, 102)', bg: 'rgb(255, 0, 102, 0.175)' },
	{ fg: 'rgb(0, 102, 153)', bg: 'rgb(0, 102, 153, 0.175)' },
	{ fg: 'rgb(51, 204, 51)', bg: 'rgb(51, 204, 51, 0.175)' },
	{ fg: 'rgb(255, 153, 0)', bg: 'rgb(255, 153, 0, 0.175)' },
	{ fg: 'rgb(204, 0, 255)', bg: 'rgb(204, 0, 255, 0.175)' },
	{ fg: 'rgb(0, 0, 102)', bg: 'rgb(0, 0, 102, 0.175)' }
]
