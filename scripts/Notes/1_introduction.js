//Javascript Introduction.
//Javascript is a lightweight iterpreted & just in time complied langauge and its first call function programing Lanaguge(Functions are treated like a variable). 
// Javascript is Syncronous(Single line at a time in a Specific Order) and Single threaded Programming langauge.
//(Everything in Javascript Happens  inside this Execution Context) It has two Components which are Memory Components and Code Components.
// Memory Components used to store all Variable .
// Code Components used to execute code Line by line.(Thread of Execution)
//  |             Call Stack           |
//  |----------------------------------| 
//  |          Exection Context        |
//  |----------------------------------| 
//  | Memory Component | Code Component|    
//  |----------------------------------| 
//  | a:10             |               | 
//  | key:value        |               | 
//  | function{}       |               |
//  | ---------------------------------| 

//In the First Phase javascript goes through all lines one by one for decarlaring and assigning the values(undefined) to the variables.(Memory Componets).
//For example variable number will be declared and assigned as undefined in the first phase (Memeory Component).
//In Second Phase(Code Phase) it assigns the value 12 to the variable number.
// Decalares and Stores complete function inside the variable sqaure.
var number = 12; 
//num is parameter of the Function.
function square(num){
    return num * num
}
//Function invoking.
//When the Function is invoked or called, Javascript creates brand new Whole Execution context and it contains memory & Code Components in it.
//number is the Argument for the function
//As soon as function returns the values .Whole Execution context will be deleted.
var square2 = square(number);
var square4 = square(4);
console.log("Hello World!")
//Once the Javascript Reaches the last line of code(Once its finishes the Execution context).It deletes the whole Execution context.
//This Whole thing is controlled by Call Stack.When the Javascript Engine starts.. it creates a new Call stack to keep all
//Execution contexts in it.Once its finshes it execution, call satck will delete (remove) execution context from it.
//|                       |
//|                       |
//|                       |
//|                       |
//| Square                | it creates new Execution context when the square function is invoked.once sqaure function retuns.it deletes from call stack.and goes back where it left off.
//|Global Exection context|
//|--------|

//Javascript is Case Sensitive.
//Comments in Javascripts are: //Single Line Comment /* */ MultiLine Commments.
//!# Hashbang comments are used to Specify the path to a particular Javascript Engine.
//like "V8" for chrome & "Spider Monkey" for Firefox.
//Javascriptcore for Safari & Chakra for Edge browser.
//Note also that no whitespace of any kind is permitted before the #!.

