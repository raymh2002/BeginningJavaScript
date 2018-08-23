// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (password) {
	var length = password.length;
	var message = "";
	if (length >= 10) {
		message = "strong";
	} else if ((length >= 7) && (length < 10)) {
		message = "medium";
	} else {
		message = "weak";
	}
	return message;
};


// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (year) {
	var result;
	var type = typeof year;
	if (type !== "number") {
		throw "THAT'S NOT A NUMBER!";
	} else if ((year % 4 === 0) && (year % 400 === 0)) {
		result = true;
	} else if ((year % 4 === 0) && (year % 100 === 0)) {
		result = false;
	} else if (year % 4 === 0) {
		result = true;
	} else {
		result = false;
	}
	return result;
};


// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (str1, str2, str3) {
	var result;
	var testStr1 = typeof str1;
	var testStr2 = typeof str2;
	var testStr3 = typeof str3; 
	var lowerStr1 = str1.toLowerCase();
	var lowerStr2 = str2.toLowerCase();
	var lowerStr3 = str3.toLowerCase();
	if ((testStr1 !== "string") || (testStr2 !== "string") || (testStr3 !== "string")){
		throw "ALL THREE ARGS MUST BE STRINGS!"
	} else if ((lowerStr1 < lowerStr2) && (lowerStr1 < lowerStr3)) {
		result = str1;
	} else if ((lowerStr2 < lowerStr1) && (lowerStr2 < lowerStr3)) {
		result = str2;
	} else {
		result = str3;
	}
	return result;
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


// Re-implement our improveTweet function so it can generate any of lol, omg,
// lmao, and rofl.
var improveTweet = function (tweet) {
	var indexLol = tweet.indexOf("lol");
	var indexOmg = tweet.indexOf("omg");
	var indexLmao = tweet.indexOf("lmao");
	var indexRofl = tweet.indexOf("rofl");
	var random = Math.floor((Math.random() * 4) + 1);
	var randomAdd;
	var outputTweet;
	if ((indexLol !== -1) || (indexOmg !== -1) || (indexLmao !== -1) || (indexRofl !== -1)){
		outputTweet = tweet;
	} else if (random === 1) {
		outputTweet = tweet + "lol";
	} else if (random === 2) {
		outputTweet = tweet + "omg";
	} else if (random === 3) {
		outputTweet = tweet + "lmao";
	} else {
		outputTweet = tweet + "rofl";
	}
	return outputTweet;
};


// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.

var isQuestion = function (stringIn) {
	var isString = typeof stringIn;
	var length = stringIn.length;
	var indexQuestionMark = stringIn.indexOf("?");
	var result;
	if ((isString === "string") && (indexQuestionMark === (length -1))){
		result = true;
	} else {
		result = false;
	}
	return result;
};


// The Magic 8 Ball is a classic toy that allows you to ask a yes/no
// question and it responds with a random answer. Most of the time (at least half)
// it responds with a "positive" answer, about a quarter of the time it responds
// with a "neutral" answer, and about a quarter of the time it responds with a
// "negative" answer. You can read more about the Magic 8 Ball toy (and see it's
// actual responses) on Wikipedia.
//
// Write a function that simulates the Magic 8 Ball by generating a random
// number. Try to make it match the probabilities of the real toy.
//
//     magic8Ball("Will people like this problem?");
//     //=> Very doubtful
//
//     magic8Ball("Do people like these videos?");
//     //=> My reply is no
//
//     // throw an error if there's no question mark at the end
//     // use your isQuestion function from the previous question
//     magic8Ball("you suck");
//     //=> THAT DOESN'T SOUND LIKE A QUESTION!
//
//     magic8Ball("Is this a question?");
//     //=> Signs point to yes
var magic8Ball = function (question) {
	var random = Math.floor((Math.random() * 20) + 1);
	var answer = "";
	
	if (isQuestion(question) === true) {
		if ((random >= 1) && (random <= 10)) {
			answer = "Signs point to yes";
		} else if ((random > 10) && (random <= 15)) {
			answer = "Very doubtful";
		} else {
			answer = "My reply is no";
		}
	} else {
		throw "THAT DOESN'T SOUND LIKE A QUESTION!";
	}
	return answer;
};


var interjectAt = function (interject, insertPt, tweet) {
	var twtLength = tweet.length;
	var typeInterject = typeof interject;
	var typeInsertPt = typeof insertPt;
	var typeTweet = typeof tweet;
	// var confirmInterject = (interject.charAt(0) === "-") && (interject.charAt(interject.length -1) === "-")
	var beginStr = tweet.slice(0, insertPt);
	var endStr = tweet.slice(insertPt, twtLength);
	var twtInterject = "-" + interject + "-";
	var twtWithInterject = "";

	if ((typeInterject !== "string")) {
		throw "Check your interjection input!";
	} else if ((typeInsertPt !== "number") || (insertPt > twtLength)) {
		throw "The string doesn't have that many letters!";
	} else if (typeTweet !== "string") {
		throw "Check your tweet input!";
	} else {
		twtWithInterject = beginStr + twtInterject + endStr;
	}
	return twtWithInterject;
};

// random number generator function
var randomNum = function (begin, end) {
	var result = Math.floor(Math.random() * end + begin);
	return result;
}

// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
// var randomInterject = function () {
// };

var randomInterject = function (tweet) {
	var random = randomNum(1, 2);
	var begin = 0;
	var end = tweet.length;
	var insertPt = randomNum(begin, end);
	var interject = ""
	var outputtwtWithInterject = "";
	if (random === 1) {
		interject = "lol";
	} else {
		interject = "omg";
	}
	outputtwtWithInterject = interjectAt(interject, insertPt, tweet);
	return outputtwtWithInterject;
};

// var randomInterject = function (tweet) {
// 	var random = Math.floor(Math.random() * 2 + 1);
// 	var begin = 0;
// 	var end = tweet.length;
// 	var insertPt = Math.floor(Math.random() * end + begin);
// 	var interject = "";
// 	var outputtwtWithInterject = "";
// 	if (random = 1) {
// 		interject = "lol";
// 	} else {
// 		interject = "omg";
// 	}
// 	outputtwtWithInterject = interjectAt(interject, insertPt, tweet);
// 	return outputtwtWithInterject;
// };






