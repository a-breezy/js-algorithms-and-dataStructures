function frequencyCounter(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[va1] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

function multiplePointers(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left] + arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

function slidingWindow(arr) {}

// write a function that takes an array or string and checks for duplicate values
// this one uses a frequency counter
function areThereDuplicates() {
	let numCount = {};
	for (let val in arguments) {
		numCount[arguments[val]] = (numCount[arguments[val]] || 0) + 1;
	}
	for (let key in numCount) {
		if (numCount[key] > 1) {
			return true;
		}
	}
	return false;
}

// this one uses multiple pointers
function areThereDuplicates() {
	let start = 0;
	let next = 1;
	while (next < arguments.length) {
		if (arguments[start] === arguments[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}

// or a one liner
function areThereDuplicates() {
	return new Set(arguments).size !== arguments.length;
}
