console.log("Hello, world!");

function dnaStrand(dna) {
	let strand = "";

	for (char of dna) {
		switch (char) {
			case "A":
				strand += "T";
				break;
			case "T":
				strand += "A";
				break;
			case "C":
				strand += "G";
				break;
			case "G":
				strand += "C";
				break;
			default:
				return;
		}
	}

	return strand;
}

console.log("Result is:", dnaStrand("AAAA"), "TTTT", "String AAAA is");
console.log("Result is:", dnaStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log("Result is:", dnaStrand("GTAT"), "CATA", "String GTAT is");
