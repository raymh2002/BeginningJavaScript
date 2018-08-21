// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (number) {
	return number % 3 === 0;
};


// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function (celciusTemp) {
	return Fahr = (celciusTemp * 9 / 5) + 32;
};

var fahrToCels = function (fahrTemp) {
	return Celsius = (fahrTemp - 32) * 5 / 9; 
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
var randUpTo = function (number) {
	return Math.round(Math.random() * (number -1));
};


// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function (min, max) {
	return Math.round(Math.random() * ((max -1) - min) + min);
};


// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function (inputSuit) {
	var test = inputSuit.toUpperCase();
	return test === "CLUBS" || test === "DIAMONDS" || test === "HEARTS" || 
	test === "SPADES"; 
};


// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function (inputRank) {
	var test = inputRank.toLowerCase();
	return test === "two" || test === "three" || test === "four" || 
	test === "five" || test === "six" || test === "seven" || test === "eight" ||
	test === "nine" || test === "ten" || test === "jack" || test === "queen" ||
	test === "king" || test === "ace";
};


// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function (inputRank, inputSuit) {
	return isRank(inputRank) && isSuit(inputSuit);
};


// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function (inputString) {
	var capitalLetter = inputString.charAt(0).toUpperCase();
	return inputString.charAt(0) === capitalLetter && capitalLetter >= "A" && capitalLetter <= "z";
};


// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function (htmlElement) {
	var startString = htmlElement.indexOf(">") + 1;
	var endString = htmlElement.lastIndexOf("<");
	var returnString = htmlElement.slice(startString, endString);
	return returnString;
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
