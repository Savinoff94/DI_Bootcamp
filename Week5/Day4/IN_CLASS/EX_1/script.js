// Create 4 fuctions, that return 4 promises
// 1. The 1st function : Receive 2 famous persons name from the user - if the names are not string -> reject
// 2. The 2nd function : Receive a noun - if the noun is less than 3 letters - reject
// 3. The 3rd function : Receive a city - if the city doesn't start with an uppercase letter -> reject
// 4. The 4rh function : Receive a verb (finishing with ing) - if it doesn't end with "ing" -> reject
// 5. The last function, is an async function : receive all the promise, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"
function myNames(name,surname){
    return new Promise((resolve,reject) => {
        if(typeof(name) == "string" && typeof(surname) == "string"){
            resolve([name,surname]);
        }else{
            reject("names");
        }

    })
}

function myNoun(noun){
    return new Promise((resolve,reject) => {
        if(noun.length < 3){
            reject("noun");
        }else{
            resolve(noun)
        }
    })
}

function myCity(city){
    return new Promise((resolve,reject) => {
        if(city[0] != city[0].toUpperCase()){
            reject("city");
        }else{
            resolve(city)
        }
    })
}

function myIng(verb){
    return new Promise((resolve,reject) =>{
        if(verb.substring(verb.length-3, verb.length) != "ing"){
            reject("verb")
        }else{
            resolve(verb)
        }
    })
}

async function final(){
    let first = await myNames("Andrei", "Savinov");
    let second = await myNoun("house");
    let third = await myCity("New York");
    let forth = await myIng("playing");
    return `${first} ${second} ${third} ${forth}`
}

final().then((x) => console.log(x));
