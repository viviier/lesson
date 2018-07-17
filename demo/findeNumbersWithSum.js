// 给定数组找和

// o(n^2)
function findeNumbersWithSum(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				return [i, j];
			}
		}
	}

	return false;
}

// o(n)
// 数组需要被排序
function findeNumberWithSum(arr, target) {
	arr = arr.sort();

	let ahead = 0;
	let bhead = arr.length - 1;

	while(bhead > ahead) {
		let curNum = arr[ahead] + arr[bhead];

		if (curNum === target) {
			return true;
		} else if (curNum > target) {
			bhead--;
		} else {
			ahead++;
		}
	}

	return false;
}