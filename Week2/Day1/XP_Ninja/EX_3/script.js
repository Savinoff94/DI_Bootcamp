let userPrompt = prompt("Input two numbers separated by comma, and withiut any spaces");
userPrompt = userPrompt.split(",");

console.log(Number(userPrompt[0]) + Number(userPrompt[1]));

