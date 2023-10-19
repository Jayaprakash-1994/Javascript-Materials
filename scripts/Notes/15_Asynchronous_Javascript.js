/*
    Asynchronous programming is an essential concept in JavaScript
    that allows your code to run in the background without blocking the execution of other code. 
    Asynchronous in javascript is done with callbacks.
  (In traditional (synchronous) programming, each person would have to wait for the person before them to finish their task before starting their own.
   But with asynchronous programming, everyone can start and work on their tasks simultaneously without waiting for the others to finish.)
*/
//A callback is a function passed as an argument to another function .This technique allows a function to call another function
//A callback function can run after another function has finished.
//Simple Example is setTimeout():-
function callFunction(){
    console.log("Function is Called");
}
 setTimeout(callFunction, 5000);
 //Actual Callback function 
 let trueCondition = true;
let elseCondtion = true;
 function callbackfunction(successFunction, errorFUnction){
    if(trueCondition){
        successFunction({
            name: "SuccessFunction",
            message : "Success"
        })
    }
    else if(elseCondtion){
        successFunction({
            name: "SuccessFunction",
            message : "Success"
        });
    }
    else {
        errorFUnction({
            name: "errorFUnction",
            message : "Error"
        })
    }
}
callbackfunction(
    (message) => { 
            console.log("First Function "+message.name + " and message is "+ message.message)
        },
    (message) => { 
        console.log("Second Function "+message.name + " and message is "+ message.message)
    });
/*
    Promises :-
    A Promise is an object that represents the result of an asynchronous computation.
    That result may or may not be ready yet and the promise API is intentionally vague about this: there is no way to synchronously get the 
    value of a promise, you can only ask the promise to call the callback function to get the value is ready.

    Promise is more like the Promise we use to the people.its has 2 states (resolved,rejected)
    If the promise is made successfully it means Resolved.If its failed its a rejected.

    Why Promies:-
        To aviod callback hells & kepp the code more readable to the user.
        */
    //Example:-
    fetch('url')
        .then(response => response.json())
        .then(responsejson => console.log(responsejson))
        .catch(error => console.log(error));
        
    /*
    fetch() returns promise
    then() returns promise 
    response.json() returns promise
    catch() returns promise 
    */
   //Note It will not directly in console window for some reason.
   //host the app in IIS and Check the results.
   //Practical example:-
   fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita%")
    .then(response => { 
            if(!response.ok){
                return null;
        }
        let type = response.headers.get("content-type");
        if(type =="application/json"){
            throw new Error(`Expected JSON , got ${type}`);
        }
        return response.json();
    }).then(
        jsonResponse => {
            if(jsonResponse){
                console.log(jsonResponse);
            }
            else{
                console.log(jsonResponse);
            }
        }
    ).catch(error => {
        if(error instanceof NetworkError){
            console.log(error);
        }
        else if(error instanceof TypeError){
            console.log(error);
        }
        else{
            console.log(error);
        }
    })
// You can even handle the exception even before the next then() .
getDataFromDatabase()
    .then(displayTable)
    .catch(displayDatabaseError)
//Another Way is :-
getDataFromDatabase()
    .catch(e => wait(500).then(getDataFromDatabase))
    .then(displayTable)
    .catch(displayDatabaseError)

//Async and await (introduced in ES 2017)


function makeRequest(location){
    return new Promise((resolve,reject) =>
    {
        console.log(`Making Request to ${location}`);
        if(location =="Google"){
            resolve('Google Says hi');
        }
        else{
            reject('We Can only talk to Google');
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject) =>{
        console.log('Processing Response');
        resolve(`Extra information+ ${response}`);
    })
}
//Using Promise
makeRequest("Google")
    .then(response => {
        console.log("Processing Response"); 
        return processRequest(response)}
        )
    .then(reResponse => console.log(reResponse));

//Using Async & await
async function doWork(){
    try{
    let response = await makeRequest("faceBook");
    console.log("Processing Response");
    let reResponse = await processRequest(response);
    console.log("ReProcessed Response");
    }
    catch(err){
        console.log(err);
    }
}

