const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

function countSpases(str){
    let counter = 0;
    for(char of str){
        if(char == " "){
            counter++;
        }
    }
    return counter;
}


console.log(startLine);
console.log(turtle.padStart(countSpases(startLine) + rabbit.length - 2, " "));
console.log(rabbit.padStart(countSpases(startLine) + turtle.length - 2, " "));

turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);