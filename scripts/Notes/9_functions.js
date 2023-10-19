/*
---------- Functions---------------
Difference between functions & Methods.
A function is a set of instructions or procedures or block of Code to perform a specific task, and a method is a set of instructions that are associated with an object

In javascript there are 2 types of methods in the Objects.
1. Normal Property Method.
 let obj = {
    name : "Jaya Prakash",
    employeetype : function(){
        console.log("Employement Type is Permenent");
    },
    //Shorthand Methods
    salary() {
        console.log("salary is 12LPA");
    }
 }
2. accessor Methods. getter & setter methods .
let employee = {
    name:"Jaya Prakash",
    get changename() { return this.name }, //getting the Value;
    set changename(val) {      // setting the Value;
        return this.name = val;
    }
}

functions with parameters.
 ** functions in javascript doesn't consider the no of arguments & type of data you pass in the functions.
 it checks only the function name is there or not.
  for example :- i can pass more or less number of arguments to a function to invoke.
  function sum(x,y){
    return x+y;
  }
   valid function expression:-
   sum(1,2);
   sum();
   sum(1,2,3);
   sum("jayaprakash","j");

   You can even pass the Object as an argument to a function in javascript.
   function objectexpand(o) {
    for(let i in o){
        if(o.hasOwnProperty(i))
           {
            console.log("Available Property is "+ i);
            }
        else{
        console.log(i);
        }
    }
}
objectexpand(obj); let obj = {name: 'Jaya Prakash', employeetype: ƒ, salary: ƒ};

To Expand an Object javascript has int built function named as obj.assign(Destination_objectname , Source_objectname);



----------Clouser-----------------
A closure gives you access to an outer function's scope from an inner function.

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

Call() apply() and bind() Methods :-
call() and apply() methods allows you to indirectly invoke a function as if it were a method of some other object.
for example:- 
let personalDetails = {
    firstname: "Jayaprakash",
    lastname : "J",
    fullname() {
        console.log("Fullname is "+ this.firstname + this.lastname);
    }
}
above object have fullname method in it but below object doesn't have  the same method in it. still we can use the same method for this object as well.
let personalDetails1 = {
    firstname: "JayaBharathi",
    lastname : "K",
    
}

personalDetails.fullname.call(personalDetails1,1,2,4,5); // takes 1st argument as an object , remaning arguments as function parameters
both call() and apply() functions does same . but only difference is apply takes array argument.
personalDetails.fullname.apply(personalDetails1 , [1,2,3,4]); //takes 1st argument as an object , remaning arguments should be array  as function parameters
personalDetails.fullname.bind(personalDetails1); // binds the function to an object.

Higher Order function :
If a function takes  another function as an argumnent or returns a function from it is called as higher order functions.

Generator functions :-
function marked with prefix of * is generator function.
*/