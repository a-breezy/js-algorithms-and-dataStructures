// how to use javascript sort function:
// first create a function to compare the two numbers of an arr
function numberCompare(num1, num2) {
	return num1 - num2;
}

// then pass that function into the sort function
console.log([1, 23, 54, 2, 6, 28].sort(numberCompare));

// or compare by the length of the string
function compareByLength(str1, str2) {
	return str2.length - str1.length;
}

// bubble sort isn't often used
// it compares two values, if one value is larger you swap the pairs until
// the largest is at the end and the smallest is at the start
function bubbleSort(arr) {
	// set loop to end of arr
	// this is done to prevent unnecessary loops because j is compared to i-1,
	// or the amount of indices that haven't been compared yet
	for (let i = arr.length; i > 0; i--) {
		// loop through arr again comparing arr[i] to all other indices
		for (let j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j + 1]);
			// if the index at i is larger than the next index, move i up one index (i+1)
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

function swap(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}

// a more eloquent version of bubble sort is:
function bubbleSort(arr) {
	// es6 syntax of the swap function above
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
}

// for an array that is nearly sorted, bubble sort isn't efficient because
// it checks through arr without actually making any swaps
// there's an easy optimisation for that:
// add a condition to check if there's a need to swap
function bubbleSort(arr) {
	let noSwaps;
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
}
