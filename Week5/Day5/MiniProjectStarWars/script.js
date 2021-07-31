let urlBasis = 'https://swapi.dev/api/'
let button = document.getElementById("reload");

button.addEventListener("click", renderCard);

function reloadCard(url){
    async function requestData(){
        try{
            let fetched = await fetch(url);
            if(fetched.status == 200){
                let response = await fetched.json();
                console.log(response);
                return response;
            }else{
                throw new Error("not 200");
            }
        }catch(err){
            renderError(err);
        }
    }
    return requestData();

}


async function renderCard(){
    let card = document.getElementsByClassName("personCard")[0];
    card.innerHTML = "";
    let loader = document.createElement("div")
    loader.setAttribute("id","loader");
    card.appendChild(loader)
    
    let id = Math.floor(Math.random() * 100) + "/";
    let urlBasis = 'https://swapi.dev/api/'
    
    let obj =await reloadCard(urlBasis + "people/" + id);
    let planetObj =await reloadCard(obj["homeworld"]);
    card.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.innerText ="Name: " + obj["name"];
    let height = document.createElement("h2");
    height.innerText ="Height: " + obj["height"];
    let gender = document.createElement("h2");
    gender.innerText ="Gender: " + obj["gender"];
    let birthYear = document.createElement("h2");
    birthYear.innerText ="Birth year: " + obj["birth_year"]; 
    let planet = document.createElement("h2");
    planet.innerText ="Home planet: " + planetObj["name"];
    card.appendChild(h1); 
    card.appendChild(height)
    card.appendChild(gender)   
    card.appendChild(birthYear)
    card.appendChild(planet)
}

function renderError(text){
    let card = document.getElementsByClassName("personCard")[0];
    card.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText =text;
    card.appendChild(h1); 
}