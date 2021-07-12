let div = document.querySelector("div");

div.style.backgroundColor = "lightblue";

div.style.padding = "10px";

let ul = document.querySelector("ul");
ul.lastElementChild.style.border = ("solid black 5px");
// ul.firstElementChild.setAttribute("hidden", "");
ul.removeChild(ul.firstElementChild);

document.body.style.fontSize = "20px";

if(div.style.backgroundColor == "lightblue"){
    let name = ul.firstElementChild.textContent;
    alert(`Hello ${name}`);
}

