let shoppingList = [];

let form = document.createElement("form");

let label = document.createElement("label");
let labelText = document.createTextNode("item");
label.appendChild(labelText);
label.setAttribute("for", "item");
form.appendChild(label);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "item");
form.appendChild(input);

let button = document.createElement("button");
let buttonText = document.createTextNode("Add item");
button.addEventListener("click", addItem);
button.appendChild(buttonText);
form.appendChild(button);

function addItem(event){
    event.preventDefault();
    shoppingList.push(input.value);
}

let button2 = document.createElement("button");
let buttonText2 = document.createTextNode("REMOVE EVERYTHING");
button2.addEventListener("click", remove);
button2.appendChild(buttonText2);
form.appendChild(button2);

function remove(event){
    event.preventDefault();
    shoppingList.length = 0;
}



document.getElementById("root").appendChild(form);






