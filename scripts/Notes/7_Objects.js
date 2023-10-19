/*
****************Objects*****************
Objects for eg: (biCycle) are State (brand,color,..)  & behaviours (Changing Colors, Chnaging Gears,..)
Objects is a composite value: it aggregates the  Multiple values(premitive Values or other Objects ) allows you to store 
& retrive those the values with name.

An Object is a unordered collection of properties , each with names & values.
Objects are Mutable its Manipulated by Refernce Not by value.
//Different Ways to create an Object:- 
let empty = {};

let points = {x:12,y:13}

let obj = Object.create({x:1 , y : 20});

let o1 = Object.create(null);

let 02 = Object.create(Object.Prototype);

let p2 = { x : points.x , y: points.y}

let book = {
    "main title": "Javascript",
    "sub-title" : "The Definitive Guide",
    for: "all Audiance",
    author : {
        firstname : "David",
        surname : "Flangan"
    }
}

//creating Objects With New Keyword.
let o  = new Object();
let arr = new Array();
let d = new Date();
let ma = new Map();

Extending Objects :-
if you want to copy the properties and methods from one object to another object use.
Object.assign(destinationObject, sourceObject);
Object.assign({}, destinationObject, sourceObject); Copy all to destinationObject and Copies it to new empty object.

Each Object Property has 3 property Attributes.
1. Writable. (is Writable)
2. Enumerable (Wheather the Property is returned in for/in loops)
3. Configurable (Wheather the property can be deleted / altered)
// to modify Property attributes in Object
Object.defineProperty{o,"x",{
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
}}

You can Create an Object like this as well 
var obj = Object.create(Object.Prototype); (Creates an Object and Inhertis the Properties from an Manditory argument).
var obj = Object.create(null);


class OOPs {
    constructor(name) {
        this.name = name;
    }
  
    // Getter method
    get langName() {
        return this.name;
    }
  
    // Setter method
    set langName(x) {
        this.name = x;
    }
    hello(){
        console.log(`Hello ${this.name}`)
    }
}
  
let obj = new OOPs('JavaScript');
console.log(obj.name); 
  
obj.langName = 'Java';
console.log(obj.name);


Prototypes :-
    All Objects created by object literals have the same prototype Object and we can refer to this prototype object in javascript 
    as Object.prototype.

    Objects created using this new keyword and a constructor invocation use the value of the prototype property of the constructor function 
    as their protype.so object created by new Object inhertis from Object.prototype.
    let obj = {} ==> inhertis Object.prototype();
    let obj = new obj() => inhertis Object.prototype();

    let d = new Date() => inhertis Date.prototype() => this inhertis from Object.prototype() this is called prototype chain.


Inheritance :- 
    To inherit a set of propertis from their prototype Object use Object.create(parentObject) ;
    for example :-
        let o ={};
        o.x =1;
        let p =Object.create(o);
        p.x;
        p.y= 12;
        let q = object.create(p);
        q.z = 3;
        let f = q.tostring();
      
        

    Function prototype :-
        Function prototype is the object instance that will become the prototype for all objects created using 
        this function as the constructor . this seems confusing take example read again.

        function Cat (name, color){
            this.name = name;
            this.color = color;
        }
        var fluffy = new cat ("fluffy", "white");
        console.log(cat.prototype) ==> cat { }
        console.log(fluffy.__proto__) ==> cat { }
        console.log(cat.prototype === fluffy.__proto__) ==> true;
        If i add another property to an Cat class it adds to all the objects that are already created.
        Cat.prototype.age = 3;
        So now this age property is available to all the object that are already created.
        this called function prototype.

    object prototype :- 
        Object Prototype is Object instance from which the object is inhertied

*/