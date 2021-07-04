let userPrompt = Number(prompt("input number"));

let output = "boom";

if(userPrompt < 2){
    console.log(output)
}
else{
    if(userPrompt > 2){
        output = "b" + "o".repeat(userPrompt) + "m";
    }
    if(userPrompt % 2 == 0){
        output = output + "!";
    }
    if(userPrompt % 5 == 0){
        output = output.toUpperCase();
    }

    console.log(output);
}

