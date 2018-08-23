// your notes here!
console.log("Trouble Shoot Your JS Code!");


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
 
var orderTwoStrings = function(string1, string2) {
	var A = string1.toLowerCase();
	var B = string2.toLowerCase();
	if (A < B) {
		return A;
	} else {
		return B;
	}
}

// var getTagName = function (inputTag) {
// 	var endIndex = inputTag.length - 1;
// 	var htmlCloseTag = inputTag.slice(2, endIndex);
// 	var htmlOpenTag = inputTag.slice(1, endIndex);
// 	if (inputTag.slice(0, 2) === "</") {
// 		return htmlCloseTag;
// 	} else {
// 		return htmlOpenTag;
// 	} 
// }

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

var improveTweet = function (inputTweet) {
	var outputLolTweet = inputTweet + " LOL!";
	var outputTweet = inputTweet;
		 if (inputTweet.toUpperCase().indexOf("LOL") === -1) {
		return outputLolTweet;
	} else {
		return outputTweet;
	}
}

var evalTweet = function(tweet) {
	var tweetLength = tweet.length;
	var feedback;
	if (tweetLength >= 100) {
		feedback = "awesome!";
	}
	else if (tweetLength >= 50 && tweetLength < 100) {
		feedback = "sorta-good!";
	}
	else {
		feedback = "not so great!";
	}
	return feedback;
}

var nestedMaxOfThree = function (a, b, c) {
	var result;
	if (a > b) {
		if (a > c) {
			result =a;
		} else {
			result =c;
		}
	} else {
		if (b > c) {
			result = b;
		} else {
			result = c;
		}
	} 
	return result;
}	

var maxOfThree = function (a, b, c) {
	var result;
	if ((a > b) && (a > c)) {
		result = a;
	} else if ((b > a) && (b > c)) {
		result = b;
	} else {
		result = c;
	}
	return result;
}



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

var improveTweet = function (inputTweet) {
	var random = Math.floor((Math.random() * 4) + 1);
	var randomAdd;
	var outputTweet;
	if (random === 1) {
		randomAdd = "lol";
	} else if (random === 2) {
		randomAdd = "omg";
	} else if (random === 3) {
		randomAdd = "lmao";
	} else {
		randomAdd = "rofl";
	}
	outputTweet = inputTweet + randomAdd;
	return outputTweet;
};

// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.
// var interjectAt = function () {
// };

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

// the below randomNum(begin, end) function is called by the randomInterject(tweet) function

var randomNum = function (begin, end) {
	var result = Math.floor(Math.random() * end + begin);
	return result;
}

// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.

// the below function randomInterject() calls randomNum(begin, end) function
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
