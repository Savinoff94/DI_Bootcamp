let str1= "mix";
let str2 = "pod";

let substr1 = str1.slice(0,2);
let substr2 = str2.slice(0,2);



let answer = str1.replace(substr1, substr2) + " " + str2.replace(substr2, substr1);

console.log(answer);