// your notes here!
console.log("06-arrays");
console.log("troubleshoot practice exercises")


var createArray = function(arrayName, start, end, increment, type) {
	var arrayElement = start;
	var endElement = end;
	var incElement = increment;
	// arrayName = [];
	var createArray = [];

	if (type === "even"){
		for (start; arrayElement <= endElement; arrayElement += incElement){
			if (arrayElement % 2 === 0) {
				createArray.push(arrayElement);
				console.log(createArray);
			} else {
			}
		}
	} else if (type === "odd") {
		for (start; arrayElement <= endElement; arrayElement += incElement){
			if (arrayElement % 2 !== 0) {
				createArray.push(arrayElement);
				console.log(createArray);
			} else {
			}
		}
	} else {
		for (start; arrayElement <= endElement; arrayElement += incElement){
			createArray.push(arrayElement);
			console.log(createArray);
			}
	}
	arrayName = [];
	arrayName = createArray;
	console.log(`testArray is ${testArray}` )
	return arrayName;
}

var iterateOverArray = function(arrayName) {
	var end = arrayName.length -1;
	var index = 0;
	for (index; index <= end; index += 1) {
		console.log(arrayName.charAt(index));
	}
}


var sumValues = function (list) {
	var sum = 0;
	var index = 0;
	var end = list.length;

	for (index; index < end; ++index) {
		sum += list[index];
		console.log("index value =  "+ list[index] + "   sum =  " + sum);
	}
	return sum;
}

var smallestNumber = function(array){
	var index = 1;
	var stop = array.length;
	var smallNum = array[0];

	console.log("start number =  " + smallNum);

	for (index; index < stop; ++index) {
		evalNum = array[index];
		 smallNum > evalNum ? smallNum = evalNum : smallNum;
		 console.log("small number =  " + smallNum + "   evalNum =  " + evalNum);
	} 
	return smallNum;
}


var largestNum = function(array){
	var index = 1;
	var stop = array.length;
	var largeNum = array[0];

	console.log(`start number =  ${largeNum} `);

	for (index; index < stop; ++index) {
		evalNum = array[index];
		largeNum < evalNum ? largeNum = evalNum : largeNum;
		console.log(`large number =  ${largeNum}   evalNum = ${evalNum} `);
	}
	return largeNum;
}


var multiplesOfFactor = function(array, factor) {
	var returnArray = [];
	var index = 0;
	var stop = array.length;

	for (index; index < stop; ++index) {
		console.log(` array element = ${array[index]}`)
		evalFactor = array[index] % factor;
		evalFactor === 0 ? returnArray.push(array[index]) : returnArray
		console.log(`evalFactor ${evalFactor}  returnArray = ${returnArray}`);
	}
	return returnArray;
}

// ********* Practice  Exercises ***********


// Write a function called `containsTwice` that accepts a number and an array,
// and returns `true` if that number appears in the array twice, and `false`
// otherwise.
//
//     containsTwice(5, [1, 2, 3, 4, 5]);
//     //=> false
//
//     containsTwice("hello", [ "hello", "world", "hello" ]);
//     //=> true
//
//     containsTwice(true, [ true, false, false, true ]);
//     //=> true
//
//     containsTwice(10, [10, 10, 10, 10, 10]);
//     //=> false
//
// var containsTwice = function (testValue, inputArray) {
// 	var index = 0;
// 	var length = inputArray.length;
// 	var count = 0;
// 	var test;

// 	for (index; index < length; ++index) {
// 		testElement = inputArray[index];
// 		console.log(`count = ${count} index = ${index} testElement = ${testElement} testValue = ${testValue}`);
// 		testElement === testValue ? ++count : count
// 		console.log(`New Count =  ${count}`);
// 		if (count === 2) {
// 		test = true;
// 		} else {
// 			test = false;
// 		}
// 	}
// 		return test;
// };

var containsTwice = function (testValue, inputArray) {
	var index = 0;
	var length = inputArray.length;
	var count = 0;
	var test;

	for (index; index < length; ++index) {
		testElement = inputArray[index];
		console.log(`index = ${index}  testElement = ${testElement}  testValue = ${testValue}  count = ${count} `);
		testElement === testValue ? ++count : count
		console.log(`New Count =  ${count}`);
	}
		count === 2 ? test = true : test = false
		return test;
};

// Generalize the previous solution into a function called `containsNTimes` so
// that it can check for a value an arbitrary number of times.
//
//     containsNTimes(3, "hello", [ "hello", "hello", "hello" ]);
//     //=> true
//
//     containsNTimes(5, true, [ true, true, true, true, false ]);
//     //=> false
//
//     containsNTimes(0, 5, [ 1, 2, 3, 4, 5 ]);
//     //=> false
//

var containsNTimes = function (testCount, testValue, inputArray) {
	var index = 0;
	var length = inputArray.length;
	var count = 0;
	var test;

	for (index; index < length; ++index) {
		testElement = inputArray[index];
		console.log(`count = ${count}  index = ${index}  testElement = ${testElement}  testValue = ${testValue}`);
		testElement === testValue ? ++count : count
		console.log(`New Count =  ${count}`);
	}
		count === testCount ? test = true : test = false
		return test;
};


// Write a function called `atLeastOneEven` that returns `true` if at least one of
// the numbers in input array is even, false otherwise. It should throw an error if
// the argument is not an array.
//
//     atLeastOneEven([ 3, 5, 6, 7, 9 ]);
//     //=> true
//
//     atLeastOneEven([]);
//     //=> false
//
//     atLeastOneEven([ 101, 203, 401 ]);
//     //=> false
//
//     atLeastOneEven("hello");
//     //=> input should be an array!
//

var atLeastOneEven = function (inputArray) {
	var testValue = 2;
	var test;
	var index = 0;
	var length = inputArray.length;

	if (Array.isArray(inputArray) !== true) {
		throw "This is not an array! Try again A-hole!";
	}

	for (index; index < length; ++index){
		if (inputArray[index] % testValue === 0) {
			return true
		}
	}
	return false;
};


// Write a function called `allStrings` that accepts an array as an argument and
// returns `true` if all of the values in the array are strings. It should
// return false if they are not all strings, and throw an error if the input is
// not an array.
//
//     allStrings([ "these", "are", "all", "strings" ]); //=> true
//
//     allStrings([ "these", "are", "not", 5 ]); //=> false
//
//     allStrings([ ]); //=> true
//
//     allStrings("hello"); //=> input should be an array!
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds a non-string entry in the array.
//
var allStrings = function (inputArray) {
	var testArray = inputArray;
	var index = 0;
	var length = inputArray.length;
	var testResult;

	if (Array.isArray(testArray) !== true){
		throw "This is not an array! Try again A-hole!"
	}

	console.log(` length = ${length}`)
	console.log(` first element testArray =  ${testArray}`);
	console.log(` typeof testElement =  ${typeof testArray[index]}`);

	for (index; index <= length; ++index){
		testElement = testArray[index];
		if (typeof testElement === "string" || typeof testElement === "undefined"){
			testResult = true;
		
		} else {
			testResult = false;
			return testResult;
		}
	}
	return testResult;
};



// Write a function that accepts two arrays, and returns true if any of the
// values in the first array appear twice in the second array. You might want to
// reuse the function `containsNTimes` or `containsTwice` from above. It should
// throw an error if either of the inputs are not arrays.
//
//
//     containsAnyTwice([1, 2], ["hello", 1, "world", 1]);
//     //=> true
//
//     containsAnyTwice([], ["always", "will", "return", "false"]);
//     //=> false
//
//     containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"]);
//     //=> true
//
//     containsAnyTwice("hello", ["hello", "world"]);
//     //=> containsAnyTwice expects two arguments, both of which should be an array.
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds an element in the first array that appears twice in the second
// array.
//

// This is a fully functioning function containsAnyTwice() except it does not 
// handle compareArray = [ ] the vesion after this commented function fixes this deficiency 


// var containsAnyTwice = function (compareArray, targetArray) {
	
// 	if (Array.isArray(compareArray) === false || Array.isArray(targetArray) === false){
// 		throw "One or both of these is not an array! Try again A-hole!"
// 	}	

// 	var indexCA = 0;
// 	var lengthCA = compareArray.length;
// 	var count = 0;

// 	if (lengthCA === 0){
// 		lengthCA = 1;
// 	} 

// 	for (indexCA; indexCA < lengthCA; ++indexCA){
// 		var elementCA = compareArray[indexCA];
// 		if (containsTwice(elementCA, targetArray) === true) { 
// 				return true;
// 			}
// 	}
// 	return false;
// };



// function containsAnyTwice() with a fix for compareArray( [ ] )
// controls for the input of the empty array [ ] which when passed into the function 
// evaluates as "undefined"
// also addresses compareArray.length = 1 in previous version does not execute the for loop

// var containsAnyTwice = function (compareArray, targetArray) {
// 	if (Array.isArray(compareArray) === false || Array.isArray(targetArray) === false){
// 		throw "One or both of these is not an array! Try again A-hole!"
// 	}
// 	var indexCA = 0;
// 	var lengthCA = compareArray.length;
// 	var count = 0;
// 	var test = "no result";


// 	if (lengthCA === 0){
// 			lengthCA = 1;
// 		} 

// 		for (indexCA; indexCA < lengthCA; ++indexCA){
// 			var elementCA = compareArray[indexCA];
// 			var testForTwice = containsTwice(elementCA, targetArray);
// 			if (testForTwice === true || test === true) { 
// 					test = true;
// 				} else if (testForTwice === false && test !== true) {
// 					test = false;
// 				}
// 			console.log(`         Are there two elements of testValue= ${elementCA} in the targetArray ?   ${test}`);
// 		}
// 	return test;
// };

var containsAnyTwice = function (compareArray, targetArray) {
	if (Array.isArray(compareArray) === false || Array.isArray(targetArray) === false){
		throw "One or both of these is not an array! Try again A-hole!"
	}
	var indexCA = 0;
	var lengthCA = compareArray.length;
	var count = 0;
	var test = "no result";


	if (lengthCA === 0){
			lengthCA = 1;
		} 

		for (indexCA; indexCA < lengthCA; ++indexCA){
			var elementCA = compareArray[indexCA];
			var testForTwice = containsTwice(elementCA, targetArray);
			if (testForTwice === true || test === true) { 
					test = true;
				} else if (testForTwice === false && test !== true) {
					test = false;
				}
			console.log(`         Are there two elements of testValue= ${elementCA} in the targetArray ?   ${test}`);
		}
	return test;
};



// In the previous problem, we determined whether or not an array contains any
// of a list of values exactly twice. In this problem, we'll actually return
// those values appearing twice.  Create a new function that returns an array of
// only the values from the first array that appear twice in the second array.
//
// For this problem, you'll create a new array, and you'll use its `push`
// function to add elements to the end. You'll most likely want to use the
// `containsTwice` function you created in the previous exercise.
//
// The difficulty here will be in avoiding duplicates. You may want to use the
// `indexOf` method of the resulting array to confirm that you're not adding a
// value a second time.
//
//     getValuesAppearingTwice(["hello", 1, "world", 1]);
//     //=> [ 1 ]
//
//     getValuesAppearingTwice(["always", "will", "return", "empty"]);
//     //=> []
//
//     getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"]);
//     //=> [ "hello", "world" ]
//
//     getValuesAppearingTwice(["hello", "world", "goodbye"])
//     //=> []
//
var getValuesAppearingTwice = function (inputArray) {
	if (Array.isArray(inputArray) === false){
		throw "This is not an array! Try again A-hole!"
	}
	var index = 0;
	var inputLength = inputArray.length;
	var rtnArr = [];
	var rtnIndex = 0;
	var rtnCount = 0;

	var testCount = 2;


	if (inputLength < 1) {
		return rtnArr;
	} 

	for (index; index < inputLength; ++index){
		var testElement1 = inputArray[index];
		var testRtnElement = rtnArr[rtnIndex];
		if ((testElement1 !== testRtnElement) && (containsNTimes(testCount, testElement1, inputArray) ===  true)) {
			rtnArr.push(testElement1);
			++rtnCount;
			rtnCount > 1 ? ++rtnIndex : rtnIndex
		} 
	}
	return rtnArr;
};

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
		result = openTag;
	}
	return result;
};



// Write a function called `filterToLol` which accepts an array of tweets and
// returns an array that consists only of those that contain `lol` (upper, lower,
// or mixed-case). It should throw an error if the input is not an array or if any
// of the elements are not strings.
//
//     filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"]);
//     //=> ["this is a tweet lol"]
//
//     filterToLol(["lol", "LOL", "LoL", "omg", "lollerskates"]);
//     //=> ["lol", "LOL", "LoL", "lollerskates"]
//
//     filterToLol(["omg", "this is a tweet"]);
//     //=> []
//
//     filterToLol(5);
//     //=> no can do.
//
//     filterToLol(["this is a string", false, 5]);
//     //=> all entries must be strings!
//
var filterToLol = function (inputArray) {
	if (Array.isArray(inputArray) === false){
		throw "This is not an array! Try again A-hole!"
	}
	let returnArray = [];
	let testString = "lol";

	inputArray.forEach(function (element){
		if (typeof element !== "string"){
			throw 'One or more elements is not a string! Fix this and try again A-hole!';
		} else if (element.toLowerCase().indexOf(testString) !== -1) {
			returnArray.push(element);
		} else {
		}
	});

	return returnArray;

};




