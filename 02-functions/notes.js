// your notes here!
// console.log("hello world!");
// console.log("This is another statement!");
// console.log("Chinga Tu Madre!");

// greet("Semmy")
// => "Hello, Semmy!"

// var greet = function (name) {
// 	var sayHello = ("Hello, " + name );
// 	return sayHello;
// }

var cardRank = ""
var cardSuit = ""
var toCardString = function (cardRank, cardSuit) {
		var output = cardRank + " of " + cardSuit;
		return output;
}

// console.log(toCardString("queen", "hearts"));
// console.log(toCardString("ace", "spades"));
// console.log(toCardString("Douche", "Bag!!!"));

// makeHtmlParagraph("hello world");
// => <p>hello world</p>


var htmlTagType = "";
var content = "H";
// var htmlTagType = "p";
// var content = "Hello World!";

// function makeHtmlEntry (htmlTagType, content) {
// 	var htmlEntry = ("<" + htmlTagType + ">" + content + "</" + htmlTagType + ">") ;
// 	return htmlEntry;
// }

function makeHtmlEntry (htmlTagType, content) {
	var htmlOpenTag = ("<" + htmlTagType + ">");
	var htmlCloseTag = ("</" + htmlTagType + ">");
	var htmlEntry = (htmlOpenTag + content + htmlCloseTag);
	return htmlEntry;
}



