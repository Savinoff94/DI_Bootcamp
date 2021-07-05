let userPrompt = prompt("prompt a word");

console.log(userPrompt.replace(/[eyuioa]/gi, ""));




userPrompt = userPrompt.replace(/[a]/gi, "1");
userPrompt = userPrompt.replace(/[e]/gi, "2");
userPrompt = userPrompt.replace(/[i]/gi, "3");
userPrompt = userPrompt.replace(/[o]/gi, "4");
userPrompt = userPrompt.replace(/[u]/gi, "5");

console.log(userPrompt);