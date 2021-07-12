let div = document.body.firstElementChild;
div.setAttribute("id", "socialNetworkNavigation");

li = document.createElement("li");
let liText = document.createTextNode("logout");

li.appendChild(liText);

let ul = document.body.getElementsByTagName("ul");

ul[0].appendChild(li);

console.log(ul[0].firstElementChild.textContent)
console.log(ul[0].lastElementChild.textContent)