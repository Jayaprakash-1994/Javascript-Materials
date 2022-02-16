//Operators In Javascript.
//10 types of Operators in Javascript.
/*
1. Assignment Operator (=,+=,-=,*=,/=,)
2. Comparsion Operator (==,===,!=,!==,>,<,<=,>=)
3. Artithmatic Operator (+,-,*,/,%,++,--,**)
4. Bitwise Operators (&,|,^,~,<<,>>) [ AND,OR,XOR,Bitwise OR,Left shift ,Right shift]
5. Logical Operators  ( ||,!,&&)
6. String Operators (+) [Concatination]
7. Conditional Ternary Operator (?:)[Condition ? true : false]
8. Comma Operator (,)[Used in arrays] eg arr=[1,2,3,4].
9. unary Operator (delete,typeOf,void)
    1.delete operator is used to delete properties of the object.Syntax is
        delete object.property;
        delete object[propertyKey];
        delete objectName[index];
    2. typeof.
        typeof returns the type of operand. eg. typeof(12) it returns number.
    3. void.
        used Non Return function. void will return undefined.
10.Relation Operator. (in, instanceOf)
    1.The in operator returns true if the specified property is in the specified object. The syntax is:
        'length' in String
    2.The instanceof operator returns true if the specified object is of the specified object type. The syntax is:
        objectName instanceof objectType

Javascript has Pre-increment and post increment
pre-Increment:-
 count = 0 
 ++count; --> the operator increases the variable count by 1 but returns the value after incrementing. So now it returns 1.

 Post increment:- 
 count ++; --> the operator increases the variable count by 1 but returns the value before incrementing. So now it returns 0.

 Same applies from pre & post Decrements.
*/
//Dates in Javascript.
/*Time is an important thing. We like to know the time a certain activity or event.
 In JavaScript current time and date is created using JavaScript Date Object.
  The object we create using Date object provides many methods to work with date and time.
  The methods we use to get date and time information from a date object values are started
   with a word get because it provide the information. getFullYear(), getMonth(), getDate()
   , getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()
   */

const now = new Date();
