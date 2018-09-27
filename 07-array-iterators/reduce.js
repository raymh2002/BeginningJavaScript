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


const forward = [1, 2, 3, 4, 5];

const reverse = forward.reduce((a, x) => {
	// if(!a[x[0]]) a[x[0]] = [];
    // a[x[0]].unshift(x);

	if(!a[x[0]]) a[x[0]] = [];
	a[x[0]].unshift(x);
    return a; }, {});
console.log(reverse);
