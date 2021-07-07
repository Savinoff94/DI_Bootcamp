function isDivisible(divisor){
    let sum = 0;
    let outcome = "";
    for(let i = 1; i <=500; i++){
        if(i % divisor == 0){
            outcome = outcome.concat(" " + i);
            sum += i;
        }
    }
    console.log(`Outcome: ${outcome} \n Sum: ${sum}`);
}

isDivisible(prompt("input divisor"));