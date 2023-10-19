// Set Classes :-
/*
Set is a collection of values , like array .
unlike array sets are not orderer /indexed and they don't allow duplicates.
Argument to the Set object should be an iterable Object.

ex:-
    let s = new Set();
    let t = new Set([1,s]); // add new set with 2 members.
    s.size() // to get Size of a set.
    s.add() // to add new element in a Set.
    s.delete()

 Map :-
    Map Object represents a set of values known as keys , where each key has another value assosiated with(mapped to) it.

    ex :-
    let m = new Map();
    let n = new Map([
        ["one",1],
        ["two",2]
    ]);

Differnce between Map & weak Map :-
    A WeakMap is a collection of key/value pairs whose keys must be objects or non-registered symbols.
    Keys of WeakMaps must be garbage-collectable. Most primitive data types can be arbitrarily created and don't have a lifetime, 
    so they cannot be used as keys. Objects and non-registered symbols can be used as keys because they are garbage-collectable.

    let weakmap = new WeakMap();

Regular Expression :-
    let rg=  new RegExp(expression);
    re.search("Input");
    re.match();
    re.matchAll();
    re.replace();
    re.replaceAll();
    re.split();
Date & Time :-
    let now = new Date();




*/