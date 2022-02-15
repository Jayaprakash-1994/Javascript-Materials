
//Javascript have 3 kinds of declarations.
//1. var 2.let 3.const
//var   --> Stands for variable,optionaly intialzing to the value. eg. var x=10;
//let   --> Declars a blocked, scoped,local variable . optionally intialzing it to a value. eg let x = 10;
//Const --> Declars block-Scoped Read only named Constant. eg. const x =10;
//----------------Rules----------------------------------
//Variable must starts with underscore(_),lettes,and dollar sign($) subsequent Chars can be Numbers(0-9).
//Legal Names are:- numver_hits;temp99;$cridit and _name;
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
//Destructing Variables:-
//... this spread operator makes it possible tot unpack the values from arrays or properties of Objects into distinct Variables.
let a,b,rest;
[a,b] = [10,20];
console.log(a);
console.log(b);
[a,b,...rest] = [10,20,30,40,50,60];
//Variable hositing :-
//You can refer to a varaible declared later without getting an Exception(If not using Strict Mode)
console.log(n);
// In above line variable is called even before the variable is declared..This rule applies same for Function Hoisting.
console.log(callingFunctionBeforeDeclaring());

var n= 10;
function callingFunctionBeforeDeclaring(){
    return "Function Called";
}





