let article = document.body.firstElementChild;
let articleChildren = article.children;

article.removeChild(articleChildren[articleChildren.length-1]);

let h2 = document.getElementsByTagName("h2")[0];
h2.addEventListener("click", changecolor);
function changecolor(event){
    event.target.style.backgroundColor = "red";
}

let h1 = document.getElementsByTagName("h1")[0];
let fontSize = Math.floor(Math.random() *101);
h1.style.fontSize = `${fontSize}px`;

let h3 = document.getElementsByTagName("h3")[0];
h3.addEventListener("click", hide);
function hide(event){
    event.target.style.display = "none";
}

let button = document.createElement("button");
let textButton = document.createTextNode("BOLD");
button.appendChild(textButton);
button.addEventListener("click", bold);
function bold(){
    ps = document.getElementsByTagName("p");
    for(p of ps){
        p.style.fontWeight="bold";
    }
}

document.body.appendChild(button);

let submit = document.getElementById("submit");
submit.addEventListener("click", mySubmit);

function mySubmit(event){
    event.preventDefault();
    if(document.getElementById("fname").value == ""){
        console.log(document.getElementById("fname").value)
        alert("Input the first name");
        return;
    }else if(document.getElementById("lname").value == ""){
        alert("Input the last name");
        return;
    }else{
        let div = document.createElement("div");
        let textDiv = document.createTextNode(`${document.getElementById("fname").value}      ${document.getElementById("lname").value}`)
        div.appendChild(textDiv);
        document.body.appendChild(div);
    }
}


let secondP = document.getElementsByTagName("p")[1];

secondP.addEventListener("mouseover", myFunc);

function myFunc(event){
    console.log("dddd")
    event.target.setAttribute("class", "fade");
}
