// write a function that calculates the sum of all numbers from 1 up to n

// a function using a loop to arrive at the answer
// O(n) --> Linear: Operations/runtime grow in relation to n
function addUpToFirst(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

// to see it's performance:
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// another function not looping
// O(1) --> Constant: operations remain the same, regardless of size of n
function addUpToSecond(n) {
	return (n * (n + 1)) / 2;
}

// function to count up to n, the back to 0
// O(n) --> because we only care about big picture (linear), not the fact that there are two loops
function countUpAndDown(n) {
	console.log("Going up!");
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
	console.log("At the top!\nGoing down...");
	for (let j = n - 1; j >= 0; j--) {
		console.log(j);
	}
	console.log("Back down. Bye");
}

// nested loop, loop within another loop
// O(n) within O(n) --> O(n^2) Quadratic
// every loop increases the run time exponentially
function printAllPairs(n) {
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}

// SPACE COMPLEXITY

// O(1) space becuase numbers, total and i, are constant
function sum(arr) {
	// 'total' is one number
	let total = 0;
	// 'i' is one number
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

// O(n) space new array increases in direct relation to input
function double(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(2 * arr[i]);
	}
	return newArr;
}
