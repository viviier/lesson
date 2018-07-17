// create two dimensinoal array

// @param a length
// @param b 2d length
function createTwoDimensionalArray(a, b) {
	let result = [];
	for (let i = 0; i < a; i++) {
		result[i] = [];
		for(let j = 0; j < b; j++) {
			result[i][j] = 0;
		}
	}

	return result;
}

console.log(createTwoDimensionalArray(4, 2));