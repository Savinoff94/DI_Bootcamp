let letters = ["a","b","q","w","e","r","t","y","u","i","o","p","s","d","f","g","h","j","k","l","z","x","c","v","n","m"];

let left = 0;
for(letter of letters){
    let div = document.createElement("div");
    let text = document.createTextNode(letter);
    div.appendChild(text);
    div.style.position = "absolute";
    left += 50;
    div.style.left = `${left}px`; 
    div.setAttribute("draggable", "true");
    div.style.border = "solid black 2px";
    div.style.width = "50px";
    div.addEventListener("dragend", dragendHandler);
    document.body.appendChild(div);
}


function dragendHandler(event){
    let x = event.clientX;
    let y = event.clientY;
    event.target.style.top = `${y}px`;
    event.target.style.left = `${x}px`;
}
