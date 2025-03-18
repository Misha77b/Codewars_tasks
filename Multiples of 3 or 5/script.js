console.log("Hello, world!");

function solution(number) {
	let sum = 0;
	for (let i = 0; i < number; i++) {
		if (number < 0) {
			return 0;
		} else if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	// console.log(sum);

	return sum;
}

console.log(solution(10), `solution for 10 is 23`); // Output: 23
console.log(solution(15), `solution for 15 is 45`); // Output: 45
console.log(solution(0), `solution for 0 is 0`); // Output: 0
console.log(solution(-5), `solution for -5 is 0`); // Output: 0
console.log(solution(20), `solution for 20 is 75`); // Output: 78
