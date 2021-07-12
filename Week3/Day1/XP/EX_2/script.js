let ulArray = document.body.getElementsByTagName("ul");
ulArray[0].lastElementChild.textContent = "Richard";

for(ul of ulArray){
    ul.firstElementChild.textContent = "Andrei";
}


let aim = ulArray[1].children[1];

ulArray[1].removeChild(aim);
for(ul of ulArray){

    let li = document.createElement("li");
    let liText = document.createTextNode("Hey students");
    li.appendChild(liText);
    ul.appendChild(li);
}




