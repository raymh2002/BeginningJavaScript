// your notes here!
console.log("Test my JS code!");
console.log("Notes for section 05-loops")

var loop = function (startValue, endValue, increment) {
	var count = startValue;
	var printOutput;
	while (count < endValue) {
		console.log("The count is " + count);
		count = count + increment;
	}
	printOutput = "The count ended at " + count;
	return printOutput;
}

var loopReportOddEven = function (startValue, endValue, increment) {
	var count = startValue;
	var printOutput;
	console.log("start count at " + startValue);
	console.log("end count at " + endValue);
	console.log("increment by " + increment);
	while (count < endValue) {
			if (count % 2 === 0) {
				console.log("even count = " + count);
		}	else {
				console.log("odd count  = " + count);
		}
		count = count + increment;
	}	
	  printOutput = "The count ended at " + count;
	return printOutput;
}

var forLoopPrintIDPosNegInt = function (startValue, endValue, increment) {
	var count;
	for (count = startValue; count <= endValue; count += increment){
		if (count < 0) {
			console.log("the negative count is " + count);
		} else if ((count > 0) && (count <= 100)){
			console.log("the positive count less than 100 is " + count);
		} else if (count > 0) {
			console.log("the positive count greater than 100 is " + count);
		} else {
			console.log("ZERO ==> " + count)
		}
	}
	console.log("Execution ended at " + (count - increment) + " but the count ended at ==> " + count)
}

var sumFirstOneHundred = function (startValue, endValue, increment) {
	var count = startValue;
	var sum = 0;
	if (startValue < endValue) {
	for (count; count <= endValue; count += increment) {
		sum += count;
		console.log("count = " + count + "   sum = " + sum);
	} 
	} else {
		for (count; count >= endValue; count -= increment) {
		sum += count;
		console.log("count = " + count + "   sum = " + sum);
	}
	}
}

var largestDivisor = function (inputValue){
	var divisor = inputValue - 1;
	var highestDivisor = 1;
	var evaluateDivisor;
	var factor;
	for (divisor ; divisor > 1; divisor -= 1){
		evaluateDivisor = inputValue % divisor;
		if ((evaluateDivisor === 0) && (highestDivisor < divisor)){
			highestDivisor = divisor;
			factor = inputValue / divisor;
			console.log("HIGHEST DIVISOR = "  + highestDivisor + "   factor = " + factor)
		} else if (evaluateDivisor === 0) {
			factor = inputValue / divisor;
			console.log("divisor = " + divisor + "    factor = " + factor);
		} else {
		}
	}
	return highestDivisor;
}

var firstLowerCaseLetter = function(tweet) {
	var errorMsg;
	if (typeof tweet !== "string") {
		errorMsg = "This is not a string!";
		throw errorMsg;
	}	
	var strPosition = 0;
	var flcLetter ; 
	var end = tweet.length;
	for (strPosition; strPosition < end; strPosition += 1) {
		if (tweet.charAt(strPosition) >= "a" && tweet.charAt(strPosition) <= "z"){
			flcLetter = tweet.charAt(strPosition);
			return flcLetter;
		} else {
		}
	}
	errorMsg = "A lower case letter was not found!";
	return errorMsg;
}

var reverseString = function (tweet) {
	var errorMsg;
	if (typeof tweet !== "string") {
		errorMsg = "This is not a string!";
		throw errorMsg;
	}

	var countDown = tweet.length -1;
	var revStr = "";
	console.log(tweet);
	for (countDown; countDown >= 0; countDown -= 1){
		revStr = revStr + tweet.charAt(countDown);
		console.log(revStr);

	}
	return tweet + " IN REVERSE => " + revStr;
}



var isLowerCaseLetter = function (inputStr) {
	var output;
	var length = inputStr.length;
	if (typeof inputStr === "string" && length === 1 && "a" <= inputStr && inputStr <= "z"){
		output = true;
		return output;
	} else {
			output = false;
			return output;
	}
};


// test for typeof with 2 inputs : 1) testInput & 2) "type" 
// 

var typeOfTest = function (testInput, type){
	var testValue = typeof testInput;
	if (testValue === type){
		return true;
	} else {
		return false;
	}
}

// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!
//
var sumUpTo = function (inputNum) {
	var count = 1;
	var stop = inputNum;
	var sum = 0;
	if (inputNum < 0) {
		throw "The number must be positive! Try again!"
	} else {
		for (count; count <= stop; count += 1){
			sum = sum + count;
		}
	}
		return sum;
};


// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
//

var sumAToB = function (a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
	throw "the inputs must be numbers";
	} 
	var range = Math.abs(a - b);
	var sum = 0;
	var count = 0;
	if (a < b) {
		start = a;
		for (count; count < range + 1; count += 1) {
			increment = start + count;
			sum = sum += increment;
		}
	} else {
		start = b;
		for (count; count < range + 1; count += 1) {
			increment = start + count;
			sum = sum += increment;
		}
	}
	return sum;
};

// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false
//
// var isVowel = function (inputStr) {


var isVowel = function (inputStr) {
	var output;
	var length = inputStr.length;
	var checkStr = "aeiou";
	var checkStrLength = checkStr.length;
	var checkStrIndex = 0;
	if (length !== 1 || typeof inputStr !== "string") {
		output = false;
		return output;
	} else {
		for (checkStrIndex; checkStrIndex < checkStrLength; checkStrIndex += 1) {
			if (checkStr.charAt(checkStrIndex) === inputStr.toLowerCase()) {
				output = true;
				return output;
			} else {
				output = false;
			}
		}
	}
	return output;
};


// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function (inputStr) {
	if (typeof inputStr !== "string") {
		throw "The input was not a string! Try again A-hole!"
	} else {
		var stop = inputStr.length;
		var count = 0;
		var index = 0;
		for (index; index < stop; index += 1) {
			if (isVowel(inputStr.charAt(index)) === true) {
				count += 1;
			}
  	}
	}
  return count;
};

// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverseString("hello world!");
//     //=> !dlrow olleh
//
//     reverseString("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverseString("");
//     //=>
//
//     reverseString(true);
//     //=> input to reverseString must be an string!
//
var reverseString = function (tweet) {
	if (typeOfTest(tweet, "string") !== true) {
		throw "input to reverseString must be an string!";
	} else {
		var index = tweet.length - 1;
		var reverseTweet ="";
		for (index; index >= 0; index = index - 1) {
			reverseTweet += tweet.charAt(index);
		}			
	}
	return reverseTweet;
};

// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
// var isPrime = function (inputNum) {
// 	if (typeOfTest(inputNum, "number") === true) {
// 		var index = inputNum -1;
// 			for (index; index > 1; index -= 1) {
// 				var test = inputNum % index;
// 				if (test === 0) {
// 					return false;
// 				} else {
// 				}
// 			}	
// 	} else {
// 		throw "The input is not a number! Try again A-hole!"
// 	}
// 	return true;
// };

var isPrime = function (inputNum) {
	if (typeOfTest(inputNum, "number") === true && inputNum > 1) {
		var index = inputNum -1;
			for (index; index > 1; index -= 1) {
				var test = inputNum % index;
				if (test === 0) {
					return false;
				} else {
				}
			}	
	} else {
		return false;
	}
	return true;
};




// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//

var sumPrimesUpTo = function (inputNum) {
	if (typeOfTest(inputNum, "number") === true && inputNum >= 0){
		testNum = inputNum;
		primeNum = 0;
		aggPrime = 0;

		for (testNum; testNum >=1; testNum -= 1) {
			if (isPrime(testNum) === true) {
				primeNum = testNum;
				aggPrime += primeNum;
				console.log("PRIME NUMBER >>>  " + primeNum + "  Sum of Prime numbers = " + aggPrime);
			} else {
				console.log(testNum + "  not prime");
			}
		}
	} else {
		throw "input number should be zero or a positive number!";
	}	
	return aggPrime;
};




// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3682913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function (primeCountTarget) {
	if (primeCountTarget >= 0){
		var testNum = 2;
		var primeCount = 0;
		var primeCountStop = primeCountTarget;
		var primeNum = 0;
		var primeAgg = 0;

		while (primeCount < primeCountStop) {
			if (isPrime(testNum) === true){
				primeNum = testNum;
				primeAgg += primeNum;
				primeCount += 1;
				testNum += 1;
			} else {
				testNum += 1;
			}
		}
	} else {
		throw "input number should be zero or a positive number!";
	}	
	return primeAgg;
};


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
//

var removeNonLetters = function (inputStr) {
	if (typeOfTest(inputStr, "string")) {
		var cleanStr = "";
		var index = 0;
		var stop = inputStr.length - 1;

		for (index; index <= stop; index += 1) {
			var testChar = inputStr.charAt(index);
			if (testChar >= "A" && testChar <= "z") {
				cleanStr += testChar;
			} else {
			}
		}
	} else {
		throw "Input must be a string! Try again A-hole!"
	}
	return cleanStr;
};





// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.

var isPalindrome = function (inputStr) {
	if (typeOfTest(inputStr, "string")) {
		var result;
		var cleanStr = "";
		var backwardString = "";
		cleanStr = removeNonLetters(inputStr);
		cleanStrTest = cleanStr.toLowerCase();
		backwardString = reverseString(cleanStr);
		backwardStrTest = backwardString.toLowerCase();
		if (cleanStrTest === backwardStrTest) {
			result = true;
		} else {
			result = false;
		}
	} else {
		result = false;
	}
	// console.log(cleanStr);
	// console.log(backwardString);
	return result;
};

// var removeNonLettersPalindrome = function (inputStr) {
// 	if (typeOfTest(inputStr, "string")) {
// 		cleanStr = "";
// 		index = 0;
// 		stop = inputStr.length - 1;

// 		for (index; index <= stop; index += 1) {
// 			testChar = inputStr.charAt(index);
// 			if (testChar >= "A" && testChar <= "z") {
// 				cleanStr += testChar;
// 			} else {
// 			}
// 		}
// 	} else {
// 		// throw "Input must be a string! Try again A-hole!"
// 		return false;
// 	}
// 	return cleanStr;
// };

// var reverseStringPalindrome = function (tweet) {
// 	if (typeOfTest(tweet, "string") !== true) {
// 		// throw "input to reverseString must be an string!";
// 		return false;
// 	} else {
// 		var index = tweet.length - 1;
// 		var reverseTweet ="";
// 		for (index; index >= 0; index = index - 1) {
// 			reverseTweet += tweet.charAt(index);
// 		}			
// 	}
// 	return reverseTweet;
// };








