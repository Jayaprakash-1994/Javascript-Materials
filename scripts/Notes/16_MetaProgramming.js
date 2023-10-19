/*
    MetaPrograming :-
    Object Extensions
    Object properties // writable configurable, and Enumerable.

Reflect API:-
    Reflect doesnot provide any new features , they just group the features together in one convient API.
    The set of Reflect functions maps one-to-one with the set of Proxy handler methods.
    Reflect gives the direct access to change the fundamental Operations in Javascript Objects.


    for example:
        Object methods provides apply function , same like the reflect provides Reflect.apply(f,o,args) and its equalent to f.apply(o,args)
        like this it provides many functions, there are :-
        Reflect.apply(f,o,args);
        Reflect.constructor(o,args,newtarget) ==> equalent to let o = new Object();
        Reflect.defineProperty(o,name,descripter);==> equalent to let o = Object.defineProperty();
        Reflect.deleteProperty(o,name); ==> equalent to let o = Object.deleteProperty();

Proxy API :-
    Proxy is nothing but wrapping the Handler object to an target object.
    means if you passing the sensitive data object to an another library API In that case you need to protect few 
    properties.
    In that case we can wrap the Object to an another Object
    Proxy(targetObject, {
        get(){
            return "Not Accessable to get Property Values."
        }
    });      
*/
//example:-
function loggingProxy(o, objname) {
    //Defining handlers for our logging Proxy object.
    // Each handler logs a message and then deglegates to the target objects.
    let handlers ={
        //This is a special case because for own properties whose value is an object or function, it returns a proxy rather
        //than returning value itself.
        get(target,property, receiver){
            console.log(`Handler get(${objname},${property.toString()})`);
            let value = Reflect.get(target,property,receiver);
            if(Reflect.ownKeys(target).includes(property) && (typeof value === "object" || typeof value === "function")){
                    return loggingProxy(value,`${objname}.${property.toString()})`);
                }
            return value;
        },
        set(target,property,value,receiver){
            console.log(`Handler ${objname},${property.toString()},${value}`);
            return Reflect.set(target,property,value,receiver);
        },
        apply(target,receiver,args){
            console.log(`Handler ${objname}(${args})`);
            return Reflect.apply(target,receiver,args);
        },
        construct(target,args, receiver){
            console.log(`Handler ${objname}(${args})`);
            return Reflect.construct(target,args, receiver);
        }
    };
    Reflect.ownKeys(Reflect).forEach(handlername =>{
        if((!handlername in handlers)){
        handlers[handlername] = function(target,...args){
            console.log(`Handler ${handlername}(${objname},${args})`);
            return Reflect[handlername](target,...args);
        };
        }
    });
    return new Proxy(o,handlers);
    }