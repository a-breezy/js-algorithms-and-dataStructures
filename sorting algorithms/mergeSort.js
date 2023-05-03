// Precursor to merge sort - this function goes through two sorted arrays and merges them
function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}

// console.log(merge([1, 2, 20, 50], [3, 10, 30, 60]));

function mergeSort(arr) {
    console.log('arr', arr)
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid));
    console.log('merge', merge(left,right))
    return merge(left,right)
}

console.log(mergeSort([10, 24, 12, 3, 54, 4, 8, 25]));
