let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

for(planet of planets){
    let divPlanet = document.createElement("div");
    let name = document.createTextNode(planet);
    divPlanet.appendChild(name);
    divPlanet.setAttribute("class", "planet");
    divPlanet.classList.add(planet);
    document.getElementsByClassName("listPlanets")[0].appendChild(divPlanet);
}