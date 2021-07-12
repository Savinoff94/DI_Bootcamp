let select = document.getElementById("genres");
select.addEventListener("change", selectVal);

function selectVal(event){
    console.log(event.target.value);
}

let additional = document.createElement("option");
let text = document.createTextNode("Classic");
additional.setAttribute("value", "classic");
additional.setAttribute("selected", "selected");
additional.appendChild(text);
select.appendChild(additional);