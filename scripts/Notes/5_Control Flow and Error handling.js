/* 
Control Flow and Error Handling
//Statements are javascript Sentences or Commands.
//Expression Statements :-
// var a = 10;
//function callingFunction();
//delete o.property
Block Statement:- 
The Most Basic Statement is  Block Statement,Which is used to group the Statements.
The block statments is delimited by a Pair of Curly brackets.
{
    Statement 1;
    Statement 2;
    Statement 3;
}
Blocks are Mainly used for Control flow Statements.
*/
//Control Statements. 2 Types.
// 1. If else Statements.
// 2. Switch Statements.
var bool = true;
if(bool){
    alert("If Condition Satisfied");
}
else if(bool !== undefined || bool !== null){
    alert("Else If Condition Satisfied");
}
else{
    alert("If Condition Failed to Satisfy");
}
//Switch Statements.
switch(i){
    case 10:
        console.log(`i is ${i}`);
        break;
    case 20:
       console.log(`i is ${i}`);
        break;
    default:
        console.log(`i is ${i}`);
}
//When you use switch statment inside the function you should use return instead of break keyword 
// Case Statment uses === operator not ==.
// Loops :-
/*
1. While
2. do while
3. for 
4. for/of & its varient for/await. ( for array, Map, Set) (added in ES5)
5.for/in (for Objects )
*/
//Jump Statments :-
// 1. Break --> breaks or exits the  entire block/Loops . (break;)
// 2. Continue --> reinitate the block/ Loop (skips the remaining code & jumps back to next iteration) (contine ;)
// 3. throw -->  thows an exception ( throw new Error(" Custom Error Message")) 

//Miscellaneous Statements :-
/*
 1. With --> runs the block of statements as if the property of an object is variable scope to the block.
        ex :-
        with(document.form[0]){
            address.value= " Address";
            name.value=" Name ";
        }
        //equalent to this :-
        let f = document.form[0];
        f.address.value ="";
        f.name.value ="";
 ** with statement is forbidden in strict mode
 2.
*/
//Error handlings
//you can throw the errors by using the keyword throw.
// ex :- throw new Error("Customized Error");
//try catch and finally.
try{
    console.log("Try Block is executed");
}
catch(e){
    console.log(e);
    //You can throw the used defined error in the console.
    throw "Error"
}
finally{
    console.log("always Finally will execute ");
}

//things that are new in ES5 :- ("use strict") Mode.

/*
1. Variable should be declared before you use, otherwise it will throw an error(Reference error).
2. with statements are not allowed in the Strict mode.
3.In strict mode the argument object in a function holds a static copy of the values passed to the function. In non-strict mode 
the argumented object "Magical" behavior in which elements of the array and named function parameter both refer to the same value.
4.Syntax error is thrown when you try to delete unqaulified variable, object properties or function .
5.its a synatx error for an object literal to define two or more properties by the same name.
*/

//Declarations: -
/*
 1. let , Variable , function, class , import & export.

*/

