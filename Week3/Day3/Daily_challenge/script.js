let input = document.getElementById("input");
input.addEventListener("keyup", deleter);

function deleter(event){
    let tmp = event.target.value;
    if(!isNaN(tmp[tmp.length-1])){
        event.target.value = tmp.slice(0, -1);
    }
    
}