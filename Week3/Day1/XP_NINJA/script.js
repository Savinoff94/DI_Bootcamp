let week = ["MO", "TU", "WE", "TH", "FR", "ST", "SU" ];

let table = document.createElement("table");


const date = new Date(2018, 11);
console.log(date);
const day = date.getDay();
console.log(day);



// let tr = document.createElement("tr");
// for(let i = 0; i < 7; i++){
//     let td = document.createElement("td");
//     let newDayNode = document.createTextNode(week[i])
//     td.appendChild(newDayNode);
//     tr.appendChild(td);
// }
// table.appendChild(tr);

// let counter = 0;
// let counter_dates = 1;

// for(let i = 0; i < 5; i++){
//     let tr2 = document.createElement("tr");
//     for(let r = 0; r < 7; r++){
//         while(counter < day){
//             let td2 = document.createElement("td");
//             let tdDot = document.createTextNode(".");
//             td2.appendChild(tdDot);
//             tr2.appendChild(td2);
//             ++counter;
//             ++r;
//         }
//         let td2 = document.createElement("td");
//         let tdData = document.createTextNode(counter_dates);
//         td2.appendChild(tdData);
//         tr2.appendChild(td2);
//         counter_dates++;
//     }    
//     table.appendChild(tr2);
// }
// console.log(table);