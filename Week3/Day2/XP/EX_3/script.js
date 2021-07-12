let mySubmit = document.getElementById("MyForm");
mySubmit.addEventListener("submit", calk);

function calk(event){
    event.preventDefault();
    
    if(isNaN(+document.getElementById("radius").value)){
        alert("input a number");
    }else{
        let rad = document.getElementById("radius").value;
        let vol = 4/3 * rad * rad * rad;
        document.getElementById("volume").value = Math.floor(vol);
    }
}