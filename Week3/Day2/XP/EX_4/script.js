let div = document.createElement("div");
let textDiv = document.createTextNode("IM your DIV");
div.appendChild(textDiv);
document.body.appendChild(div);

div.addEventListener("click", mycolor);
div.addEventListener("mouseup", border);
div.addEventListener("contextmenu", moveLeft);
div.addEventListener("mousemove", moveUp);
div.addEventListener("mouseleave", big);

function mycolor(event){
    event.target.style.color = "red";
    
}

function border(event){
    event.target.style.backgroundColor = "blue";
}

function moveLeft(event){
    event.target.style.position = "absolute";
    event.target.style.top = "100px";
}

function moveUp(event){
    event.target.style.position = "absolute";
    event.target.style.left = "50px";
}

function big(event){
    event.target.style.width = "100px";
    event.target.style.height = "100px";
    event.target.style.border = "solid black 3px";
}