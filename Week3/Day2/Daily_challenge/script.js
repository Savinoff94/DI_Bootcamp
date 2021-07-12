
let button = document.getElementById("lib-button");

button.addEventListener("click", tellstory);

function checker(){
    input = document.getElementsByTagName("input");
    for(let i = 0; i < input.length; i++){
        if(input[i].value == ""){
            
            return false;
        }
    }
}

function tellstory(event){
    if(checker() == false){
        alert("have to fill in all inputs");
        return;
    }else{
        let noun = document.getElementById("noun").value;
        let adjective = document.getElementById("adjective").value;
        let person = document.getElementById("person").value;
        let place = document.getElementById("place").value;
        let verb = document.getElementById("verb").value;

        text = document.createTextNode(`${adjective} ${person} and ${noun} ${verb} at ${place}`);
        document.getElementById("story").appendChild(text);

    }
}