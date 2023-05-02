// correct approach
function binarySearch(arr, element) {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);

	while (arr[middle] !== element && start <= end) {
		if (element < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
    if (arr[middle] === element) {
        return middle;
    }
	return -1;
}

console.log(binarySearch([2, 3, 4, 6, 10, 12, 35], 6))

// cleaner approach
function binarySearch(arr,element) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== element && start <= end) {
        if (element < arr[middle]) end = middle -1;
        else start = middle +1;
        middle = Math.floor((start + end) / 2);
    } 
    return arr[middle] === element ? middle : -1;
}