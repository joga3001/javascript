/* JavaScript Foundations: Variables */
/* JavaScript Foundations: Variables */

//var color = "red";
//
//var myDiv = document.getElementById('myDiv');
//myDiv.style.background = "black";
//myDiv.style.color = "#ffffff";
//
//// Starts with A-Z a-z _ $
//// Continue with A-Z a-z 0-9 _ $
//
//// Valid Variables
//var car = "Toyota";
//var Color = "blue";
//var _myVariable = "something";
//var $specialName = 1;
//var a58389 = "What is this?";


// Invalid Variable Names
// var 3colors = "red green blue";
// var winning% = 30;
// var person-name = "Jim";
// var @you = "are awesome!";

// Reserved words 
// var continue = true;



// var myVar;
// 
// // undefined = true; 
// 
// console.log(typeof myVar === "undefined");
// console.log(myVar === undefined);
// 
// var x = null;
// 
// 
// if(myVar == null){
//   console.log("If");
// } else {
//   console.log("Else");
// }


// scope

//var world = "World";
//
//function sayHello(){
//	var hello = "Hello";
//	function inner () {
// 		var extra = " There is more!";
//		
//		console.log(hello + ' ' + world + extra );
//	}
//	
//	inner();
//}
//
//sayHello();
//
//console.log("world outside sayHello(): ", world );
////console.log("world outside sayHello(): ", hello );
//

// shadowing a variable

//var myColor = "blue";
//console.log("myColor before my function myFunc()", myColor);
//
//function myFunc(){
//	var myColor ="yellow";
//	myNumber = 39;
//	console.log ("myColor inside myFunc()", myColor);
//}
//myFunc();
//console.log("myColor after myFunc()", myColor);
//console.log("myNumber after myFunc()", myNumber);
//

// HOISTING

function doSomething (doit){
	var color = "blue",
		number,
		name = "Joga";
		
	if(doit){
		color = "red";
		number = 10;
		console.log("Color in if(){}", color)
	}
	
	console.log("Color after if(){}", color)
}

doSomething(false);
doSomething(true);