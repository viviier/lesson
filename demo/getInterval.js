// 获取数组的区间
// example: getInterval([1, 4], [3, 5]) return [3, 4]

function getInterval(...arg) {
	if (!isArea(arg)) {
		return null;
	}

	if (arg.length === 1) {
		return arg[0];
	}

	let interVal = arg.reduce((p, c) => {
		let pa = getArea(p);
		let ca = getArea(c);
		let pc = pa.concat(ca);

		let rePc = pc.filter((item, index, arr) => {
			return arr.indexOf(item) !== index;
		});

		return rePc;
	})

	// 获取区间数组
	function getArea(arr) {
		arr = arr.sort();
		let [start, end] = [...arr];
		let len = end - start + 1;
		let cur = start - 1;

		let area = Array.apply(null, {length: len}).map(() => {
			cur++;
			return cur;
		});

		// let area = [...Array(len)].map(() => {
		// 	cur++;
		// 	return cur;
		// });

		return area;
	}

	// 判断是否有他值
	function isArea(arr) {
		arr.map(item => {
			if ({}.toString.call(item) === '[object Array]') {
				isArea(item);
			}

			if (typeof item !== 'number') {
				return null;
			}
		});

		return true;
	}

	return interVal;
}

console.log(getInterval([5, 2], [4, 9], [6, 3]))