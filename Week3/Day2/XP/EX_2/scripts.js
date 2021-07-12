function getBold_items(){
    let strong = document.querySelectorAll("p > strong");
    return strong;
}

function hightlight(){
    let array = getBold_items();
    for(arr of array){
        arr.style.color = "blue";
    }
}

function return_normal(){
    let array = getBold_items();
    for(arr of array){
        arr.style.color = "black";
    }
}

let p = document.getElementsByTagName("p")[0];
p.addEventListener("mouseover", hightlight);
p.addEventListener("mouseout", return_normal);