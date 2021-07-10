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
    switch(sign){
        case "+":
            break;
        case "-":
            break;
        case "*":
            break;
        case "/":
            break;
    }
}

