function ages2(myAge){
    console.log(`My mom age is ${myAge * 2}`);
    console.log(`My fathers age is ${myAge * 2 *1.2}`);
}


let myAge = 25;

ages(myAge);

function ages2(myAge){
    return myAge * 2;
}

console.log(ages2(myAge))