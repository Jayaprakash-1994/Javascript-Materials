/* 
Control Flow and Error Handling
Block Statement:- 
The Most Basic Statement is as Block Statement,Which is used to group Statements.
The block statments is delimited by a Pair of Curly brackets.
{
    Statement 1;
    Statement 2;
    Statement 3;
}
Blocks are Mainly used for Control flow Statements.
*/
//Control Statements. 2 Types.
// 1. If else Statements
// 2. Switch Statements.
var bool = true;
if(bool){
    alert("If Condition Satisfied");
}
else if(bool !== false){
    alert("Else If Condition Satisfied");
}
else{
    alert("If Condition Failed to Satisfy");
}
//Switch Statements.
switch(bool){
    case i==10:
        console.log(`i is ${i}`);
        break;
    case i==20:
       console.log(`i is ${i}`);
        break;
    default:
        console.log(`i is ${i}`);
}
//Error handlings
//you can throw the errors by using the keyword throw.
//try catch and finally.
try{
    console.log("Try Block is executed");
}
catch(e){
    console.log(e);
}
finally{
    console.log("always Finally will execute ");
}