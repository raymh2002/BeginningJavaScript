// your notes here!
console.log("These are the notes for 07-array-iterators");
console.log("And the working exercises for the chapter!")

const simpleRange = (endValue) => {
	let outputArray = [];
	let index = 0;

	for (index =0; index <= endValue; ++index){
		outputArray.push(index);
	}
	return outputArray;
}

// var multTimes2 = function (endValue, factor){
// 	let times2 = simpleRange(endValue).map(function (number){
// 		return number * factor;
// 	});
// 	console.log("times2 array = " ,times2);
// };

// var multTimes2 = function (endValue, factor){
// 	let times2 = simpleRange(endValue).map(number => number * factor);
// 	console.log(times2);
// };

const multTimesFactor = (endValue, factor) => {
	// return simpleRange(endValue).map(number => number * factor);
	return simpleRange(endValue).map(number => number + 7);
};

const addNum = (number) => number + 7; 

// //arrow function version
// let rn = people.filter( person => (person.email.indexOf("@replicant.io")>-1) )
// .map(person => person.name );
// console.log("List of replicant names:", rn);


const doublesForEach = function (inputArray){
	let returnArray = [];

		inputArray.forEach(function(element){
		returnArray.push(element * 2)
	});

	return returnArray;
};

const doublesMap = function (inputArray){
	return inputArray.map(function(element){
		return element * 2;
	});
};

const squareMap = function (inputArray){
	return inputArray.map(function(element){
		return Math.pow(element, 2);
	});
};

const exponentMap = function (inputArray, exponent){
	return inputArray.map(function(element){
		return Math.pow(element, exponent);
	});
};

const returnFirstLettersMap = function(inputArray){
	return inputArray.map(function(word){
		return word.charAt(0);
	});

}


// The FizzBuzz problem asks you to iterate over the first 100 integers, 
// replacing the multiples of 3 with the word fizz, 
// the multiples of 5 with the word buzz, 
// and the multiples of both with the word FizzBuzz.





//Arrays of Objects
// Efficiently combining and chaining Array methods and Arrow functions
// person.email.indexOf("@replicant.io") > -1
//Find the names of all the people who have "replicant.io" emails

let people = [
    {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
    {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
    {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
    {"id":258, "name":"Pris", "email":"pris@replicant.io"}
];

// console.log("people array = ", people)

// //Two step version
// let replicants = people.filter(function(person){
//    return person.email.indexOf("@replicant.io") > -1;
// });

// console.log("replicants array = ", replicants)

// let names = replicants.map(function(person){
//    return person.name; 
// });
// console.log(`names array = ${names}`)
// console.log("List of replicant names:", names);



//chain the two steps

// let replicantNames = people.filter(function(person){
//    return person.email.indexOf("@replicant.io") > -1;
// }).map(function(person){
//     return person.name;
// });
// console.log("List of replicant names:", replicantNames);

// //arrow function version
// let rn = people.filter( person => (person.email.indexOf("@replicant.io")>-1) )
// .map(person => person.name );
// console.log("List of replicant names:", rn);



// The FizzBuzz problem asks you to iterate over the first 100 integers, 
// replacing the multiples of 3 with the word fizz, 
// the multiples of 5 with the word buzz, 
// and the multiples of both with the word FizzBuzz.

const fizzBuzz = topOfRange => {
	simpleRange(topOfRange).map(number => {
		if (number % 3 === 0 && number % 5 === 0){
			console.log("FIZZBUZZ");
		} else if (number % 3 === 0){
			console.log("FIZZ");
		} else if (number % 5 === 0) {
			console.log("BUZZ");
		} else {
			console.log(number);
		}
	});
}


// const filterFunction = function (inputArray){
// 	inputArray.filter(function (number){
// 		return number > 1;
// 	});
// };

var array = [50, 126, 75, 199];

// numbers.filter(function (number){
// 	return number > 100;
// });

// const result = function (array) {
// 	return array.filter(number => number > 100);
// }

const result = (array, cutOffNum) => {return array.filter(number => number > cutOffNum)};





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


// function CreateArrayOfPrimeNums(maxNumber) accepts a max value and calls the simpleRange(maxNumber) function to 
// create an array. filter() method chained to simpleRange() calls isPrime(inputNumber) 
// add all primes from the created array and returns  an array of primes

const createArrayOfPrimeNums = (maxNumber) => {return simpleRange(maxNumber).filter(inputNum => isPrime(inputNum))};


// function sumWithReduce(inputArray) accepts an array of values and peforms the provided operations on the 
// elements from left to right.
// reduce() has 2 required parameters (sumSoFar, number)

const sumWithReduce = (inputArray) => {return inputArray.reduce((sumSoFar, number) => sumSoFar + number)};


// smallestElementWithReduce(inputArray) accepts an array of values and compares the smallestValue with  
// the iterated number from the array if number < smallest number then number replaces smallest number
// and ultimately returns the smallest value


const smallestElementWithReduce = (inputArray) => {return inputArray.reduce((smallestValue, number) => 
		number < smallestValue ? smallestValue = number : smallestValue )};



// paragraphify(["this is a tweet", "this is not a tweet", "hello world"]) 
// => This is a tweet. This is not tweet. Hello world.


const capitalize = function (tweet) {
	console.log(`${tweet[0]} >> ${tweet[0].toUpperCase()}`)
	return tweet[0].toUpperCase() + tweet.slice(1);
};

const paragraphify = function (tweets) {
	return tweets.reduce(function(paragraph, tweet){
		console.log(`${tweet}`)
		return paragraph + capitalize(tweet) + ", ";
	}, "");
};


// In one of the previous sections, we had an practice problem where you had to
// reverse a string. Do the same thing with an array, but use the `reduce` and
// `concat` methods to avoid local variables.
//
//      reverse([ 1, 2, 3, 4, 5 ]);
//      //=> [ 5, 4, 3, 2, 1 ]
//
//      reverse([ "hello", "world" ]);
//      //=> [ "world", "hello" ]
//

// this works for reversing an array of numbers but not for an array of strings
// 
// const reverse = (inputArray) => {return inputArray.reduce((all, item, index, array) => {
// 	if(!all[item[0]]) all[item[0]] = [];
// 	all[item[0]].unshift(item);
//     console.log(`${all} , ${item},  ${index},  ${array}`)
//     return all;
//      }, {});
// };

const reverse = inputArray => inputArray.reduce((all, item, index, arr) => {
	all.unshift(item);
	console.log(`all = ${all}, item = ${item}, index = ${index}, array = ${arr}`)
	return all;
     }, []);


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



// const words = ["Beachball", "Rodeo", "Angel",
//     "Aardvark", "Xylophone", "November", "Chocolate",
//     "Papaya", "Uniform", "Joker", "Clover", "Bali"];
// const alphabetical = words.reduce((a, x) => {
//     if(!a[x[0]]) a[x[0]] = [];
//     a[x[0]].unshift(x);
//     return a; }, {});
// console.log(alphabetical);

//      reverse([ 1, 2, 3, 4, 5 ]);
//      //=> [ 5, 4, 3, 2, 1 ]
//
//      reverse([ "hello", "world" ]);
//      //=> [ "world", "hello" ]
//


// const forward = [1, 2, 3, 4, 5];
// const reverse = forward.reduce((a, x) => {
// 	a.unshift(x);
// 	return a; }, {});
// console.log(reverse);



// Did you know that you could have arrays within arrays? This is perfectly
// legal JavaScript:
//
//     var nestedArray = [ 1, 2, [ 10, 20 ], 3, 4, 5 ];
//
//     nestedArray[0];
//     //=> 1
//
//     nestedArray[1];
//     //=> 2
//
//     nestedArray[2];
//     //=> [ 10, 20 ]
//
//     nestedArray[2][0];
//     //=> 10
//
// For this problem, write a function using `reduce` that "flattens" a possibly
// nested array into a single array.
//
//     flatten(nestedArray);
//     //=> [ 1, 2, 10, 20,  3, 4, 5 ]
//
//     flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ]);
//     //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// You'll also want to use the `concat` method to make this work.

const flatten = inputArray => inputArray.reduce((all, item, index, array) => all.concat(item), []);

// the below "flatten" function fails because it is missing an intial value of []
// const flatten = inputArray => inputArray.reduce((all, item, index, array) => all.concat(item));

// longer version of the "flatten" function
// const flatten = inputArray => inputArray.reduce((all, item, index, array) => {
// 	return all.concat(item);
// 	}, []);


// Using `range` and a chain of array methods, write a function that accepts a
// number `n` and returns the sum of all of the positive multiples of 3 and 5 that
// are smaller than or equal to `n`.
//
//     sumOfMultiplesOf3And5(100);
//     //=> 2418
//
//     sumOfMultiplesOf3And5(50);
//     //=> 593
//
//     sumOfMultiplesOf3And5(0);
//     //=> 0
//
// var sumOfMultiplesOf3And5 = function () {
// };


const sumOfMultiplesOf3And5 = inputNumber => range(0, inputNumber).reduce((all, item, index, array) => {
	return (item <= inputNumber && (item % 3 === 0  || item % 5 === 0)) ? all += item : all }, 0);


// Using a standard `for` loop, along with the `push` function, write a function
// called `range` that accepts two numbers, `begin` and `end`, and returns an array
// that contains all of the integers starting at `begin` and ending at `end`
// (including `begin` and `end`). For example:
//
//     range(5,10);
//     //=> [5, 6, 7, 8, 9, 10]
//
//     range(0,3);
//     //=> [0, 1, 2, 3]
//
//     range(10,3);
//     //=> [10, 9, 8, 7, 6, 5, 4, 3]
//
// It should throw an error when either of the arguments are not numbers.
//
//     range("hello", "world");
//     //=> arguments to range must be numbers
//
// var range = function () {
// };

const range = function (begin, end) {
	
	if (typeof begin !== "number" || typeof end !== "number"){
		throw "One or both of your inputs are not numbers. Try again A-hole."
	}

	let index = begin;
	let rtnArray = [];


	if (begin > end) { 
		for (index; index >= end; --index) {
			rtnArray.push(index);
		}	
	} else {
		for (index; index <= end; ++index) {
			rtnArray.push(index);
		}
	}
	return rtnArray;
};



// Write a function called atLeastOneVowel that accepts a string and
// returns true if that word contains at least one vowel. Do not use a
// `for` loop or a `forEach` loop.
//
//     atLeastOneVowel("hello");
//     //=> true
//
//     atLeastOneVowel("dry");
//     //=> false
//
//     atLeastOneVowel("sdfjkl");
//     //=> false
//
// const atLeastOneVowel = inputString => inputString.toLowerCase().split("").some((element) => {
// 	return (element === "a" || element === "e" || element === "i" || element === "o" || element === "u"); 
// });

const atLeastOneVowel = inputString => inputString.toLowerCase().split("").some((element) => {
		let vowels = ["a", "e", "i", "o", "u"]
		return vowels.some((vowel) => {
		return vowel === element;
	}); 
});


// Write a function that accepts a list of tweets, and returns the
// longest tweet that contains the word `awesome` or the empty string
// if no tweet contains the word awesome.
//
//     logestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ]);
//     //=> "longer tweet with awesome"
//
//     longestAwesomeTweet([ "hello", "world" ]);
//     //=> ""
//
const longestAwesomeTweet = tweetArray => tweetArray.reduce((all, item, index, array) => {
	console.log(`all = ${all}, item = ${item}, index = ${index}, array = ${array}`)
	return ((item.indexOf("awesome") !== -1) && (item.length > all.length)) ? all = item : all;
}, "");




// Using the `isHTMLElement` and `getTagName` function from one of the previous
// sections, write a function called `mapToTags` that accepts an array of HTML
// elements and returns a new array that consists of only the tags associated with
// those HTML elements. It should throw an error if any of the elements are not
// HTML elements, or if the input is not an array.
//
//     mapToTags(["<p>this is a paragraph</p>", "<span>this is a span</span>", "<li>this is a list item</li>"]);
//     //=> ["p", "span", "li"]
//
//     mapToTags([]);
//     //=> []
//
//     mapToTags(["<p>this is a paragraph</p>", "this is a tweet"]);
//     //=> "this is a tweet" is not an HTML element!
//
//     mapToTags(5);
//     //=> wat?
//
//     mapToTags([ "not an html element" ]);
//     //=> all entries must be html elements!
//
const mapToTags = function (intputArr) {
	if (Array.isArray(intputArr) === false){
		throw "This is not an array. Try again A-hole";
	}

	let htmlTagArray = [];
	let count = 0;

	intputArr.forEach(function(element){
		if (isHTMLElement(element) === true){
			htmlTagArray.push(getTagName(element)); 
			++count;
		} else {
			throw "One or none of the input array elements are HTML elements! Better luck next time!";
		}
	});

		return htmlTagArray;

};





// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.

var isHTMLElement = function (inputString) {
	var startIndexOpenTag = inputString.indexOf("<");
	var charOpenTag = inputString.charAt(startIndexOpenTag + 1);
	var endIndexOpenTag = inputString.indexOf(">");
	var startIndexCloseTag = inputString.indexOf("</");
	var charCloseTag = inputString.charAt(startIndexCloseTag + 2);
	var endIndexCloseTag = inputString.lastIndexOf(">");
	var indexLastChar = inputString.length - 1;
	return charOpenTag === charCloseTag && charOpenTag > "A" && charOpenTag < "z" 
	&& charCloseTag > "A" && charCloseTag < "z" && startIndexOpenTag === 0 
	&& startIndexOpenTag < endIndexOpenTag && endIndexOpenTag < startIndexCloseTag 
	&& startIndexCloseTag < endIndexCloseTag && endIndexCloseTag === indexLastChar; 
};


// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (inputTag) {
	var indexStartOpenTag = inputTag.indexOf("<");
	var indexEndOpenTag = inputTag.indexOf(">");
	var indexStartCloseTag = inputTag.lastIndexOf("</");
	var indexEndCloseTag = inputTag.lastIndexOf(">");
	var openTag = inputTag.slice(indexStartOpenTag + 1, indexEndOpenTag);
	var closeTag = inputTag.slice(indexStartCloseTag + 2, indexEndCloseTag);
	var result;
	if ((indexStartOpenTag !== 0) || (indexStartCloseTag === -1)  || (indexEndCloseTag !== inputTag.length -1)){
			throw "Error: Not an HTML Element!";
	} else if (openTag !== closeTag){
			throw "Error: Not an HTML Element!";	 
	} else {
		// result = openTag;
		result = slice(indexEndOpenTag, indexStartCloseTag);
	}
	return result;
};

// Write a function that accepts an array of HTMLElements and returns an
// array of their content.
//
//     elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]);
//     //=> [ "this is a paragraph", "list item", "link!" ]
//
//     elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]);
//     //=> [ "This is an important heading!", "this is not as important" ]
//
// var elementsToContent = function () {
// };


const elementsToContent = arrayHTMLElements => arrayHTMLElements.reduce((all, item, index, array) => {
	let beginElementString = item.toString().indexOf(">") + 1;
	let endElementString = item.toString().lastIndexOf("<");
	all.push(item.toString().slice(beginElementString, endElementString));
	return all;
}, []);



// In a previous section, we created a function called `randUpTo` that
// returned a random integer up to an upper bound. Using that function
// along with the `range` function, write a method called
// `randomArray` that accepts two numbers, `length`, and `max`. It
// should return an array of length `length` that contains random
// numbers up to the value `max`.
//
//     randomArray(10, 100);
//     //=> [ 56, 32, 4, 92, 73, 75, 11, 10, 26, 4 ]
//
//     randomArray(5, 10);
//     //=> [ 2, 0, 3, 9, 10 ]
//
// var randomArray = function () {
// };

// const randomArray = (arraySize, maxValue) => {
// 	let randomArray = Array(arraySize).fill("");
// 		return randomArray.reduce((all, item, index, array) => {
// 			all.push(randUpTo(maxValue));
// 			return all;
// 		}, []);
// };

const randomArray = (arraySize, maxValue) => {
	let randomArray = Array(arraySize).fill("");
		return randomArray.reduce((all, item, index, array) => {
			all.push(Math.round(Math.random() * (maxValue -1)));
			return all;
		}, []);
};

// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
const randUpTo = function (number) {
	return Math.round(Math.random() * (number -1));
};

// Using the `randomNums` function from above, write a function called
// `randomElements` that accepts an array, and a number, `n` and
// returns a new array that consists of `n` random elements selected
// from the input array. Duplicates are allowed.
//
// randomElements([ "red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white" ], 5);
// //=> [ "green", "green", "blue", "orange", "black" ]
//
// randomElements([ "clubs", "diamonds", "hearts", "spades" ], 3);
// //=> [ "hearts", "diamonds", "hearts" ]
//
// var randomElements = function () {
// };


const randomElements = (inputArray, arraySize) => {
	let randomArray = Array(arraySize).fill("");
	let maxValue = inputArray.length;
		return randomArray.reduce((all, item, index, array) => {
			all.push(inputArray[(Math.round(Math.random() * (maxValue -1)))]);
			return all;
		}, []);
};


