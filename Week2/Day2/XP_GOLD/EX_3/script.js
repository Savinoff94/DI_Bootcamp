userPrompt = prompt("input verb");


if(userPrompt.length >= 3 && userPrompt.includes("ing") == false){
    console.log(userPrompt.concat("ing"));
}else if(userPrompt.length >= 3 && userPrompt.includes("ing") == true){
    console.log(userPrompt.concat("ly"));
}else if(userPrompt.length < 3){
    console.log(userPrompt);
}