
let num2 ;
let mySign = "";


function number(num){
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + num;
}

function reset(){
    document.getElementById("screen").innerHTML = "";
}

function myClear(){
    let screen = document.getElementById("screen").innerHTML.split("");
    screen.pop();
    console.log(screen);
    screen = screen.join("");
    document.getElementById("screen").innerHTML = screen;
}

function operator(sign){
    let numSum = 0;
    if(document.getElementById("screen").innerHTML == undefined || document.getElementById("screen").innerHTML == null || document.getElementById("screen").innerHTML == ""){
        alert("have to make some input");
        return;
    }else{
        switch(sign){
            case "+":
            num2 = Number(document.getElementById("screen").innerHTML); 
                break;
            case "-":
                break;
            case "*":
                break;
            case "/":
                break;
        }
    }
}

