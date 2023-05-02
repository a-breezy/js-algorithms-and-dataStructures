function naiveStringSearch(longStr, shortStr) {
	let count = 0;
	// loop over long str
	for (let i = 0; i < longStr.length; i++) {
		// loop over short str
		for (let j = 0; j < shortStr.length; j++) {
			console.log(longStr[i], shortStr[j]);
			// if characters dont match break out of inner loop
			if (longStr[i + j] !== shortStr[j]) {
				break;
			}
			// if charcters do match, continue
			// if a match is found in the inner loop, incrememnt count of matches
			if (j === shortStr.length - 1) {
				count++;
			}
		}
	}
	return count;
}

console.log(naiveStringSearch("lorie loled", "lol"))
