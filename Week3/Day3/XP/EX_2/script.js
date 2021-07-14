let toDrag = document.getElementById("toDrag");
let dropBox = document.getElementById("dropBox");

toDrag.addEventListener("dragstart", dragstartHandler);

function dragstartHandler(event){
    event.dataTransfer.setData("text/plain", event.target.id);
}

dropBox.addEventListener("dragover", dragoverHandler);

function dragoverHandler(event){
    event.preventDefault();
    event.target.style.border = "solid black 10px";
}

dropBox.addEventListener("drop", dropHandler);

function dropHandler(event){
    event.preventDefault();
    event.target.style.border = "solid black 2px";
    let data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
}