// your notes here!
console.log("hello world!");

var isNumber = function (potentialNumber) {
	return typeof potentialNumber === "number";
}

var isPositiveNumber = function (number) {
	return isNumber(number) && number > 0;
}

var isYear = function (potentialYear) {
	return Number.isInteger(potentialYear) && isPositiveNumber(potentialYear) && potentialYear <= 9999;
}

var isTweet = function (potentialTweet) {
	return potentialTweet.length <= 140;
}

var isTweetWithLol = function (potentialTweet, searchString) {
	return isTweet(potentialTweet) && potentialTweet.includes(searchString);
}