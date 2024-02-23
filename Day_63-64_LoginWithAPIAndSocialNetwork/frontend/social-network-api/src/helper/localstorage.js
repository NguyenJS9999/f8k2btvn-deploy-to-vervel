
export const saveLocal = (name, data) => {
	console.log('saveLocal ', name, data);
	if (name && data) {
		localStorage.setItem(name, JSON.stringify(data));
	}
}

export const getLocal = (name) => {
	console.log('getLocal');
	if (name) {
		const data = localStorage.getItem(name, JSON.parse(data));
		return data;
	}
}

