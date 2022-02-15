//Javascript Introduction.
//Javascript is a lightweight iterpreted & just in time complied langauge and its first call function programing Lanaguge(Functions are treated like a variable). 
// Javascript is Syncronous(Single line at a time in a Specific Order) and Single threaded Programming langauge.
//(Everything in Javascript Happens  inside this Execution Context) It has two Components which are Memory Components and Code Components.
// Memory Context used to store all Variable .
// Code Context used to execute code Line by line.(Thread of Execution)
//  |----------------------------------| 
//  |          Exection Context        |
//  |----------------------------------| 
//  | Memory Components|Code Components|    
//  |----------------------------------| 
//  | a:10             |               | 
//  | key:value        |               | 
//  | function{}       |               |
//  | ---------------------------------| 

//In the First Phase javascript goes through all lines one by one for decarlaring and assigning the values(undefined) to the variables.(Memory Componets).
//For example number will be declared and assigned as undefined in the first phase.
// Decalares and Stores complete function inside the variable sqaure.
var number = 12; 
//Num is parameter of the Function.
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
//This Whole thing is controlled by Call Stack.Whan the Javascript Engine starts.. it creats a new Call stack to keep all
//Execution contexts in it.Once its finshes it execution, call satck will delete (remove) execution context from it.
//|                       |
//|                       |
//|                       |
//|                       |
//| Square                | it creates new Execution context when the square function is invoked.once sqaure function retuns.it delets from call stack.and goes back where it left off.
//|Global Exection context|
//|--------|