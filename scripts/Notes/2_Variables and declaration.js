
//Javascript have 3 kinds of declarations.
//1. var 2.let 3.const
//var   --> Stands for variable,optionaly intialzing to the value. eg. var x=10;
//let   --> Declares a blocked, scoped,local variable . optionally intialzing it to a value. eg let x = 10;
//Const --> Declares block-Scoped Read only named Constant. eg. const x =10; (Must initialize the value).
//----------------Rules----------------------------------
//Variable must starts with underscore(_),letters,and dollar sign($) subsequent Chars can be Numbers(0-9).
//Legal variable Names are:- number_hits;temp99;$cridit and _name;
var variable = "Am Normal Global Variable.";
let scoped_variable = " Am Scoped variable";
//If you change me..you will get run time error. Because am Constant read only variable.
const PI= Math.PI;
console.log(Math.PI);
console.log(Math.round(Math.PI));
console.log(Math.sqrt(4));
console.log(Math.sin(0));
// Every Variables has its own Data Types.
//Javascript has 2 datatypes 1.Primitive Datatypes and 2 .Non primitive Datatype.
//1. Primitve Data types are data types provided by JavaScript language (Number,String,Boolean,Undefined,Null)
//2. Non-Primitive that are derived from primitve Datatypes..Objects,Array,
//Destructing Variables:- (introducted in ES6)
//... this spread operator makes it possible to unpack the values from arrays or properties of Objects into distinct Variables.
let a,b,rest;
[a,b] = [10,20];
console.log(a);
console.log(b);
[a,b,...rest] = [10,20,30,40,50,60];
//Variable hositing :-
//You can refer to a varaible declared later without getting an Exception(If you do not use Strict Mode)
console.log(n);
// In above line variable (n) is called even before the variable is declared..This rule applies same for Function Hoisting.
console.log(callingFunctionBeforeDeclaring());
//Function called before Declaring.

var n= 10;
function callingFunctionBeforeDeclaring(){
    return "Function Called";
}
//Other Usefull Objects in Javascript:-
//1.Arrays
//2.Set
//3.Map
//4.Objects
//5.Date

//----String -----
//Important Build in functions in String.
//Slice, 
//Substring,   The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still returned. The slice() method returns an empty string if this is the case.
//at, 
//indexof 
//replace 
//replaceAll 
//append 
//remove 









