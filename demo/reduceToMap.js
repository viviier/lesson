// 用reduce实现map

Array.prototype.newMap = function (fn) {
	let result = []

	this.reduce((a, b, i) => {
		result.push(fn.call(this, a, i - 1, this));

		if (i + 1 === this.length) {
			result.push(fn.call(this, b, i, this));
		}

		return b;
	})

	return result;
}

let arr = [1,2,3,4,5];

console.log(arr.newMap((item, index, arr) => {
	console.log(item, index, arr);
	return item + 1;
}));