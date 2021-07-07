//let str = "*";
//let str2 = "";


//the first way 
// for(let i = 0; i < 6; i++){
//     console.log(str.repeat(i+1));
// }

//the second way 
for(let i = 0; i < 6; i++){
    let str2 = "";
    for(let g = 0; g <= i; g++){
        str2 = str2.concat("*");
    }
    console.log(str2);
}

//the third way 

// for(let i = 0; i < 6; i++){
//     for(let g = 0; g <= 1; g++){
//         str2 = str2.concat("*");
//     }
//     console.log(str2);
// }