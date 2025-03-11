console.log("Hello, world!");

function highAndLow(numbers) {
	let strArr = numbers
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);

	let result = `${strArr[strArr.length - 1]} ${strArr[0]}`;

	console.log(numbers.split(" "));

	return result;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
