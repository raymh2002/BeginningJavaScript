// your notes here!
console.log("notes for 08-objects!");

// Write a function called isUser that accepts an object, and returns true if it is
// a valid user object, false otherwise. A valid user object will contain a
// property called `name` which is a string, and a property called `screen_name`
// which is also a string. It should contain no other properties.
//
//     isUser({ "name":"Semmy Purewal", "screen_name":"semmypurewal" });
//     //=> true
//
//     isUser({ "name":"Firstname Lastname", "screen_name":"user" });
//     //=> true
//
//     isUser("semmypurewal");
//     //=> false
//
//     isUser({ "age": 37, "name":"Semmy Purewal", "screen_name":"semmypurewal" });
//     //=> false
//
// var isUser = function () {
// };

// const isUser = inputObject => {
// 	let evaluateObject;

// 	if (Object.keys(inputObject).length === 2 && Object.keys(inputObject).forEach(element, index) => {
// 		element === "name" || element === "screen_name";
// 		 };
// 		 evaluateObject = true;
// 	) else evaluateObject = false; 
// 	return evaluateObject;
// };

// const isUser = inputObject => {
// 	const array = Object.keys(inputObject);
// 	return (array.length === 2 && array[0] === "name" && array[1] === "screen_name") 
// };

const isUser = inputObject => {
	return (Object.length(inputObject) === 2 && typeof inputObject.name === "string" 
		&& typeof inputObject.screen_name === "string"); 
};


// Often when working with HTML, we'll want to take data stored in an object and
// display it as an HTML `div` element. For example, suppose we have a person
// object which contains a name and a screen_name. We'd like to produce a `div`
// that contains an `h1` element with the name, and an `h2` element with
// screen_name. For example:
//
//     var user = { "name":"Semmy Purewal", "screen_name":"semmypurewal" };
//
//     userToDiv(user);
//     //=> "<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2></div>"
//
// Write this function. It should throw an error if the user is not a valid
// user. It might be helpful to use some functions from previous sections.
//
// var userToDiv = function () {
// };

const userToDiv = user => {
	if (isUser(user)) {
		userArray = Object.values(user);
		rtnElement = `<div><h1>${userArray[0]}</h1><h2>${userArray[1]}</h2></div>`;
	} else {
		throw "This is not a valid user! Try again A-hole!";
	}
	return rtnElement
};


// Now suppose we have a user object that contains a list of tweets. In HTML, we
// may want to represent that as a list element with a set of list items. That
// looks something like this:
//
//     <ul>
//       <li>this is a tweet.</li>
//       <li>this is another tweet.</li>
//     </ul>
//
// Write a function that converts a user object containing tweets into an HTML
// `div` element representing that user.
//
    // userWithTweetsToDiv({
    //     "name": "Semmy Purewal",
    //     "screen_name":"semmypurewal",
    //     "tweets": [
    //         "this is a tweet.",
    //         "this is another tweet!"
    //     ]
    // });
//     //=> "<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2><ul><li>this is a tweet.</li><li>this is another tweet</li></ul></div>"
//
// var userWithTweetsToDiv = function () {
// };

const userWithTweetsToDiv = inputObject => {
	userArray = Object.entries(inputObject);
	userArray.forEach( function(element, index) {
		// statements
	});
};




