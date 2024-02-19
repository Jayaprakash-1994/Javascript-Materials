//JavaScript Has 7 different Premitive Datatypes.
/* 

1. Boolean (true or false) immutable
2. null (A Special keyword denoting 'null' value null is not same as Null and NULL) immutable
3. undefined (Top level property whose value is not defined) immutable
4. number (An Integer or floating point Numbers 42 or 12.3243) immutable
5. bigint (An Integer with Arbitrary Position). immutable
6. String (A Sequence of Character that represent text value). Immutable
7. symbol (Dynamically procduces the anonymous unique value ). Immutable

*/
//Non-Premitive Data Types.
// Array 
// Objects
// Functions
/********************Important************************** */ 
//In Javascript all primitive types are immutable. and Non-Primitive types are Mutable.
//Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.
//Boolean
let bool = true;
console.log(bool);
//null
var nullvariable = null;
//undefined
var un_defined = undefined;
//number
var num  =  "12";
//Methods to Convert String to Integer and Float 
//Converting String to Integer
var integer = parseInt(num);
var parseFloat =  parseFloat(num);
//string
var str = "Jayaprakash";
//String Concationation.
console.log("Jayaprakash"+" is Working at Quess Corperation");
//String Interpolation
console.log(`${str} is Working at Quess Corperation`);

//Long String Literals..You can use \ for line breaks.
var longStringLiterals = 'asdsadasdsa asdsd \
asdasdsadasdasd \
'
//Object
var obj = {
    name: "Jayaprakash",
    age : 27,
    gender : "Male"
}

console.log(`Name is ${obj.name} and his age is ${obj.age}`);
//String Methods and Properties :-
//The string length method returns the number of characters in a string including empty space.
str.length;
//.toUpperCase()
//.toLowerCase()
//.slice() == .substring() --> Takes 2 Parameter as the starting index and number of char to slice.
//.subString() --> Takes 2 Parameter as Argument the starting index and number of characters to slice.
//.substr() --> takes 2 Parameter as argumnet the starting index and length of charactor.
//.split()  --> The split method splits a string at a specified place.
//.trim()    --> Removes trailing space in the beginning or the end of a string.
//.includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
//.replace(): takes as a parameter the old substring and a new substring.
//.charAt(): Takes index and it returns the value at that index.
//indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
str.indexOf("Jayaprakash");
//.lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
//.concat(): it takes many substrings and joins them.
//.startsWith(): it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
//.endsWith(): it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
//.search() it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
//match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
//.repeat(): it takes a number as argument and it returns the repeated version of the string.
