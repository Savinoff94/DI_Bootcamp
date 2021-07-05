let first_one = Number(prompt("input age of elder one"));
let second_one = Number(prompt("input age of elder one"));


if(second_one < first_one){
    let answer = first_one - second_one + first_one;
    console.log(answer);
}else if(second_one == first_one){
    console.log("they are equal")
}else{
    let answer = second_one - first_one + second_one;
    console.log(answer);
}


