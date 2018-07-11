function fullPermutations(arr) {
	let current = 0;
	let resulte = [];

	function fn(n) {
		for(let i = n; i < arr.length; i++) {
			swap(arr, i, n);
			if (n + 1 < arr.length - 1) {
				fn(n + 1);
			} else {
				resulte = [
					...resulte,
					[...arr]
				]
			}
			swap(arr, i, n);
		}
	}

	function swap(arr, a, b) {
		let temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}

	fn(current);
	return resulte;
}

console.log(fullPermutations(['a', 'b', 'c']));