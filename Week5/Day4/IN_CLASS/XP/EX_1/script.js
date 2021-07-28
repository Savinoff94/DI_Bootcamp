// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

async function myAsync(){
    let myVar = await fetch("https://swapi.dev/api/starships/9/");
    myVar = await myVar.json();
    return myVar
}

myAsync().then((result) => {console.log(result)});
