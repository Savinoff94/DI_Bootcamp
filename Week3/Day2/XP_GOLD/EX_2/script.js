let input = document.getElementsByTagName("input")[0];
input.addEventListener("click", deleteElement);

function deleteElement(event){
    let select = document.getElementById("colorSelect");
    let options = document.getElementsByTagName("option");
    for(option of options){
        if(option.selected == true){
            select.removeChild(option);
            return;
        }
    }
}

