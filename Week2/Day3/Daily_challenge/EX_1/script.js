let str = "*";
let str2 = "";


//the first way 
// for(let i = 0; i < 6; i++){
//     console.log(str.repeat(i+1));
// }

//the second
for(let i = 0; i < 6; i++){
    
    for(let g = 0; g < 1; g++){
        str2 = str2.concat("*");
    }
    console.log(str2);
}

