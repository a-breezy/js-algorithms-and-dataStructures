// this function counts from num down to 0, printing each number
function countDown(num) {
	if (num <= 0) {
		console.log("All done!");
		return;
	}
	console.log(num);
	num--;
	countDown(num);
}

// counts through numbers, calling itself as each function ends until it gets to the 
// basecase (1) then it adds the value 
function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}
