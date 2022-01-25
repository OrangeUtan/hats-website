export function sleep(delay) {
	return new Promise((resolve) => setTimeout(resolve, delay));
}

export function isEmptyObject(obj) {
	return Object.keys(obj).length === 0;
}
