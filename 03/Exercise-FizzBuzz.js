// Divisble by 3 - Fizz
// Divsible by 5 - Buzz
// Divisble by both 3 and 5 - FizzBuzz
// NOt divible by either one - return input
// Any that is not a number will return the string "Not a number"
const output = fizzBuzz(false)
console.log(output)
 
function fizzBuzz(input) {
	if (typeof input !== "number") return NaN;
	if ((input % 3 === 0) && (input % 5 === 0) ) return "FizzBuzz";
	if (input % 3 === 0 ) return "Fizz";
	if (input % 5 === 0 ) return "Buzz";
	return input;
}

