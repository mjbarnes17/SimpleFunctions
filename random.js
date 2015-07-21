// This getRandomNumber() takes in two arguments
// The two arguments passed into the getRandomNumber() must be an integer
function getRandomNumber(upper, lower) {
	// Checks to see if one of the arguments is not a number by using isNaN()
	if (isNaN(upper) || isNaN(lower)) {
		// If one of the conditions is true an error message be logged in the console
		throw new Error('You cannot enter any string arguements. Both arguments must be a integer data type');
	} else if (isInteger(upper) && isInteger(lower)) {
		// Checks to see if the if both conditions are both integer data types
		// If both are true then the randomNumber var is given a random number between two argument values
		var randomNumber = Math.floor(Math.random() * (Math.floor(upper) - lower + 1)) + lower;

		// This is more efficient
		// return Math.floor(Math.random() * (Math.floor(upper) - lower + 1)) + lower;

		// Returns the randomNumber
		return randomNumber;
	} else {
		// If the argument does not contain two integer data types this error message is displayed in the console
		throw new Error('You must enter a integer data type for both arguments');
	}
}

// This isInteger() checks to see if the argument is indeed an integer
function isInteger(number){
	// returns a boolean value
	// the parseInt() will only return an integer value if the argument passed in is indeed an integer such as 1 or 1.0
	// otherwise the parseInt() will return NaN
	// If the number var passed into the parseInt() is not equal to the number var itself
	// then this isInteger() will return false
	return parseInt(number) === number;

	// this simply check to see if the number is mutlpe of 1
	// if the number has anything other than 0 as a remainder
	// then the number is not and integer
	// I think this would have worked fine for what I was trying to do but the parseInt() way made more sense to me
	// return number % 1 === 0;
}

// This getRectangleArea() calculates the area of a rectangle but it only accepts 'sq ft' as only the unit measurement
function getRectangleArea(length, width, unit) {
	if (isNaN(length) || isNaN(width)) {
		// If either the length or width parameters does not contain an number data type an error message be logged in the console
		throw new Error('You cannot enter any string arguements. Both arguments must be a integer data type');
	}	else if(isNaN(unit)){
		// Checks to see if the argument passed into the unit parameter is not a number using the isNaN()
		// First the argument is converted to a lower string
		// Then is check to see if it is equal to 'sq ft'
		if(unit.toLowerCase() === 'sq ft'){
			// If true then the arguments passed in are multiplied and stred in the area var
			var area = length * width;
			// Returns area var with the unit var concatenated
			// Also turns the return value into a string
			return area + " " + unit;

			// this could have been written as this
			// return length * width + " " + unit;
		} else {
			// Displays an error in the console if the unit is not 'sq ft'
			throw new Error("You must enter 'sq ft' for the third argument");
		}
	} else {
		// Dislplays an error in the console the last argument is not a string data type
		throw new Error('You must enter a string data type for the last arguments');
	}
}

console.log(getRandomNumber(20, 10));
console.log(getRectangleArea(15, 20, "sq ft"));
