/*
-------------------------- Classes --------------------------
Classes are blueprint of an Object.
Classes are a template for creating objects. They encapsulate data with code to work on that data.
In Javascript, a class is a set of objects that inherit properties from the same prototype object.

Classes have been part of javascript since the very first version of the language. But in ES6 the finally for their own synatx with the 
introduction of "class" keyword.

In older version Class:-
    function Range(from ,to){
        this.from = from ;
        this.to = to;
    }
    all general functions has the property named as "prototype" to specify the constructor of the function (class).
    prototype must be object.
    except arrow function, generator function & async functions.

    range.prototype = {
        includes(){
            return this.from <= x && x <= this.to;
        } ,// returns true if the value between these 2 numbers else false;
        //generator function
        *[Symbol.Iterator](){
            for(let i=Math.ceil(this.from); i <= this.to;i++) yeild i;
        },
        //Shorthand Function
        tostring(){
            return "( " + this.from +" .......... " + this.to + ")" ;
        },
    }

    ----Classes with Class Keyword------
    class Range() {
        constructor(from,to){
            this.from = from;
            this.to = to;
        }
    }
-------- new.traget -----------
    If the function is not invoked as Constructor we can make it call it as constructor by using "new.target".
    Within the function you can tell wheather the function has been invoked as a constructor with the Specail expression "new.target"

    function range( from, to){
        this.from = from;
        this.to = to;
        (!new.target){
            throw Error("calling range constructor without new is invalid")
        }
    }

    If you want to define a class that subclasses - or inhertis from - another class, you can use the extend keyword with the
    class defined.

    class Span extends Range {
        constructor(start, length){
            if(length >= 0){
                    Super(start, start + length);
            }
            else{
                Super (start + length , start);
            }
        }
    }

    --- Static Methods ------

    Static Methods are defined as property of the constructor function rather than the prototype Object.
    You can define like this :-
        static parse(s){
            console.log(`Static Method Called and the parameter is ${s}`)
        }
    Static Methods & fields are class Methods rather than instance.
        //JS Fiddle:-
            class Car{
            constructor(model,color){
            this.model = model;
            this.color = color;
            }
            nonstatic (){
            console.log("Am non Static Function");
            }
            static amstatic(x){
            console.log(`Am static Method and Paramter is ${x}`);
            }
            }

            let car = new Car("I20", 2023);
            console.log(car.model);
            car.nonstatic();
            Car.amstatic("Pass");
 ---- Public private and Static Fields :-
            Private Fields :-
                If the field name begins with prefix of # with in the class its private variable.
                You can't access this variable outside of an class.(therefore its invisible & inaccessible immutable)
 
                Refer Example 10.1

--------- Subclasses ------------:-

class Typedmap extends Map {
    constructor(keyvalue, valuetype, entries){
        if(entries){
            for([k,v] in entries){
                if(typeof k !== keyvalue || typeof v !== valuetype){
                    throw new Error(`Wrong Type for entry [${k}, ${v}]`); 
                }
            }
        }

        Super(entries);
        this.keytype = keyvalue;
        this.valuetype = valuetype;
    }

set(key, value){
    if(this.keytype && typeof key !== this.keytype){
        throw new TypeError(`${key} is not of type of ${this.keytype}`);
    }
    if(this.valuetype && typeof value !== this.valuetype){
        throw new TypeError(`${value} is not of type of ${this.valuetype}`);
    }
    return super.set(key, value);
}
}

*/