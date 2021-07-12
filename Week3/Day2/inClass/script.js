// function insertRow(){
//     let table = document.body.firstElementChild;

//     let tr = document.createElement("tr");
//     for(let i = 0; i < 2; i++){
//         let td = document.createElement("td");
//         let text = document.createTextNode("Some text");
//         td.appendChild(text);
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// let button = document.body.getElementsByTagName("input")[0];
// button.addEventListener("click", insert);

// function insert(){
//     let table = document.body.firstElementChild;

//     let tr = document.createElement("tr");
//     for(let i = 0; i < 2; i++){
//         let td = document.createElement("td");
//         let text = document.createTextNode("Some text");
//         td.appendChild(text);
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

let form = document.getElementById("form1");
form.addEventListener("submit", mysubmit);


function mysubmit(event){
    event.preventDefault();
    console.log(document.getElementsByName("fname")[0].value)
    console.log(document.getElementsByName("lname")[0].value)
}