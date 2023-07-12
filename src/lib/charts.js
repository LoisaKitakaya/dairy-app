// used in production table/page/charts

export const getUniqueNames = (arr) => {
	return [...new Set(arr.map((obj) => obj.name))];
};

export const getUniqueDates = (arr) => {
	return [...new Set(arr.map((obj) => obj.date))];
};

export const filterByName = (arr, name) => {
	return arr.filter((obj) => obj.name === name);
};

export const organizeByName = (arr, names) => {
	return names.map((obj) => [...filterByName(arr, obj)]);
};

export const getColor = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	const color = `rgb(${red}, ${green}, ${blue})`;

	return color;
};
