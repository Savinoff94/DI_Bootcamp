let previous = document.getElementById("previous");
let next = document.getElementById("next");
let random = document.getElementById("random");

let currentId = 0;

for(item of [previous,next,random]){
    item.addEventListener("click", myClick);
}

async function myClick(event){
    if(currentId == 0 || event.target.id == "random"){
        renderLoading();
        let id = Math.floor(Math.random() * 500);
        currentId = id;
        let obj1 = await getData("https://pokeapi.co/api/v2/pokemon-form/" + id + "/");
        console.log(obj1);
        let pokemon = {};
        pokemon.imgURL = obj1["sprites"]["front_default"]
        pokemon.id = obj1["id"];
        pokemon.name = obj1["name"].toUpperCase();
        obj1 = await getData("https://pokeapi.co/api/v2/pokemon/" + id +"/");
        pokemon.height = obj1["height"];
        pokemon.weight = obj1["weight"];
        pokemon.type = obj1["types"][0]["type"]["name"];
        renderPokemon(pokemon);
    }else if(event.target.id == "next"){
        renderLoading();
        ++currentId;
        let obj1 = await getData("https://pokeapi.co/api/v2/pokemon-form/" + currentId + "/");
        console.log(obj1);
        let pokemon = {};
        pokemon.imgURL = obj1["sprites"]["front_default"]
        pokemon.id = obj1["id"];
        pokemon.name = obj1["name"].toUpperCase();
        obj1 = await getData("https://pokeapi.co/api/v2/pokemon/" + currentId +"/");
        pokemon.height = obj1["height"];
        pokemon.weight = obj1["weight"];
        pokemon.type = obj1["types"][0]["type"]["name"];
        renderPokemon(pokemon);
    }else{
        renderLoading();
        --currentId;
        let obj1 = await getData("https://pokeapi.co/api/v2/pokemon-form/" + currentId + "/");
        console.log(obj1);
        let pokemon = {};
        pokemon.imgURL = obj1["sprites"]["front_default"]
        pokemon.id = obj1["id"];
        pokemon.name = obj1["name"].toUpperCase();
        obj1 = await getData("https://pokeapi.co/api/v2/pokemon/" + currentId +"/");
        pokemon.height = obj1["height"];
        pokemon.weight = obj1["weight"];
        pokemon.type = obj1["types"][0]["type"]["name"];
        renderPokemon(pokemon);
    }
    
}

async function getData(url){
    try{
        let fetched =await fetch(url);
        if(fetched.status == 200){
            return fetched.json();
        }else{
            throw new Error("not 200");
        }
    }catch(err){
        console.log(err);
        // renderError(err)
    }
}

function renderPokemon(obj){
    const screenImg = document.getElementById('screenImg');
    screenImg.innerHTML = "";
    const screenInfo = document.getElementById('screenInfo');
    screenInfo.innerHTML = "";
    let a = (obj["imgURL"]);
    screenImg.style.backgroundImage = `url(${a})`;
    screenImg.style.backgroundRepeat = "no-repeat";
    screenImg.style.backgroundPosition = "center";
    screenImg.style.backgroundSize = "200px 200px";

    let p = document.createElement("p");
    p.innerHTML = `<strong>${obj["name"]}</strong><br><br>
    Pokemon №${obj["id"]}<br><br>Height: ${obj["height"]}sm<br><br>
    Weight: ${obj["weight"]}gr<br><br> Type: ${obj["type"]}`;
    screenInfo.appendChild(p);
}

function renderLoading(){
    const screenImg = document.getElementById('screenImg');
    screenImg.style.backgroundImage = ``;
    const screenInfo = document.getElementById('screenInfo');
    screenImg.innerHTML = "";
    screenInfo.innerHTML = "";
    for(item of [screenImg,screenInfo]){
        let loader = document.createElement("div");
        loader.setAttribute("id","loader");
        item.appendChild(loader);
    }
}

