let sign = "";

function myButton(char){
    sign = char;

    renderGame();
}

function renderGame(){
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    document.getElementById("X").setAttribute("disabled", "disabled");
    document.getElementById("O").setAttribute("disabled", "disabled");
    table.appendChild(tbody);
    for(let i = 0; i < 3; ++i){
        let tr = document.createElement("tr");
        for(let e = 0; e < 3; ++e){
            let td = document.createElement("td");
            td.addEventListener("click",myMove);
            td.style.backgroundColor = "purple";
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    }
    
    let tmp = tbody.firstChild;
    tmp.nextSibling.style.borderTop = "black solid 2px";
    tmp.nextSibling.style.borderBottom = "black solid 2px";

    document.getElementsByClassName("tic-tac")[0].appendChild(table);
}


function myMove(){
    console.log(sign);
}