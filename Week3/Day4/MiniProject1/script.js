let currentColor;
let flag = false;


for(let i = 0; i < 45 * 30; i++){
    let box = document.createElement("div");
    box.addEventListener("mousedown", flagOn);
    box.addEventListener("mouseup", flagOff);
    box.addEventListener("mouseover", draw);
    box.style.backgroundColor = "white";
    let painting = document.getElementById("painting");
    painting.appendChild(box);
    // box.addEventListener("click", coloring);
}

let colors = ["red", "coral", "black", "purple", " green", "darkgreen", "lightgren", "lime", "yellow", "navy", "blue", "lightblue", "darkblue", "silver", "brown", "chocolate", "orange", "blueviolet", "gold", "goldenrod", "deeppink"];

for(color of colors){
    let colorBox = document.createElement("div");
    colorBox.setAttribute("id", "colorBox");
    colorBox.addEventListener("mousedown", takeColor);
    colorBox.style.backgroundColor = color;
    colorBox.style.border = "solid black 1px"
    let containerColors = document.getElementsByClassName("containerColors")[0];
    containerColors.appendChild(colorBox);
}

function takeColor(event){
    currentColor = event.target.style.backgroundColor;
    
}

// function coloring(event){
//     event.target.style.backgroundColor = currentColor;
// }


let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", buttonHandler);

function buttonHandler(){
    let myPainting = document.getElementById("painting");
    let boxes = myPainting.children;
    for(myBox of boxes){
        myBox.style.backgroundColor = "white";
    }
}

function flagOn(){
    flag = true;
}

function flagOff(){
    flag = false;
}

function draw(event){
    if(flag){
        event.target.style.backgroundColor = currentColor;
    }
}


