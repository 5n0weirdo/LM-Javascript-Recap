
function evenOdd(limit) {
	for (let i = 0; i <= limit; i++) {
		const result = (i % 2 === 0) ? "Even" : "Odd";
		console.log(i, result);
	}
}

console.log(EvenOdd(10));