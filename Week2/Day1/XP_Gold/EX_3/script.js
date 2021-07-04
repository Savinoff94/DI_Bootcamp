let num1 = Number(prompt("Input the first number"));
let num2 = Number(prompt("Input the second number"));
let sign = prompt("Input the sign(+, -, *, /, %)");


switch(sign){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "%":
        console.log(num1 % num2);
        break;
    default:
        console.log("wrong answer");
}