// longestCommonSubstring

function longestCommonSubstring(a, b) {
	let out = '';

	if (!a.length || !b.length) {
		return out;
	}

	let cache = createTwoDimensionalArray(a.length, b.length);

	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			if (a.charAt(i) === b.charAt(j)) {
				if (i === 0 || j === 0) {
					cache[i][j] = 1;
				} else {
					cache[i][j] = cache[i -1][j -1] + 1;
				}
				if (cache[i][j] > out.length) {
					out = a.substring(i - cache[i][j] + 1, i + 1);
				}
			}
		}
	}

	return out;
}

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

console.log(longestCommonSubstring('ABAB', 'BABA'));