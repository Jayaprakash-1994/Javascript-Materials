/*
Iterator & Generators  :-
    There are 3 types are there to understand Iteration in javascript.
    1.Iterable Object. (Array, Map, set) (Any Object with a special iterator method that returns an iterator object)
    2.Iterator (any object with next() method that returns an iteration result object)
    3.iteration result. (an object with the properties of value and done )
*/
    //ex:-
    let iterable = [99];
    let iterator = iterable[Symbol.iterator]();
    for(let result = iterator.next(); !result.done; result= iterator.next()){
        console.log(result.value);
    }
    //Making Normal class as Iterable Object
    class Range{
        constructor(from , to){
            this.from = from,
                this.to = to
        }
    
    has(x){
        return typeof x === "number" && this.from <= x && x <= this.to;}
    
    tostring() { return `{ x | ${this.from} <= x & <= ${this.to}}`;}
    
    [Symbol.iterator]() {
        let next = Math.ceil(this.from);
        let last = this.to;
        return {
            next(){
                return(next <= last) ? {value: next++} : {done: true};},
            [Symbol.iterator]() {return this;}
        };
    }
    }
//Generators :-
//The function* declaration creates a binding of a new generator function to a given name.
// A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances.
function *generator() {
    console.log("Generator Method Called");
    yield 1;
    yield 2;
    yield 3;
    yield 4;

}

//Generator Febinocci Series:-

function *Febinocci(){
    let x= 0;
    let y = 1;
    for(;;){
        yield y;
        [x,y] = [y,x+y];
    }
}

let f = Febinocci();
f.next();
f.next();
f.next();
f.next();


//infinte Iteration 

