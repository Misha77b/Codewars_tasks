console.log("Hello, world!");

// A set of three sides can form a triangle if and only if the sum of any two sides is greater than the third side:
// a + b > c
// a + c > b
// b + c > a
// Additionally, all sides must be greater than zero to ensure the triangle has a valid surface area.

function isTriangle(a, b, c) {
	if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
		return true;
	} else return false;
}

console.log(isTriangle(1, 2, 2), "For 1, 2, 2", true);
console.log(isTriangle(7, 2, 2), "For 7, 2, 2", false);
