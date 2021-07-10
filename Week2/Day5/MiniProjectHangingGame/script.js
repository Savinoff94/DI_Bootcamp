function numberFinder(string){
    for(let i = 0; i < string.length; i++){
        if(!isNaN(string[i])){
            return false;
        }
    }
    return true;
}



function wordTaker(){
    let userPrompt = "";
    do{
        userPrompt = prompt("Input word longer than 8 chars");
    }while(userPrompt.length < 8 || numberFinder(userPrompt) == false)
    return userPrompt.toLowerCase();
}

function letterTaker(){
    let userPrompt
    do{userPrompt = prompt("Input a letter");
    }while(userPrompt.length != 1 || !isNaN(userPrompt));
    return userPrompt.toLowerCase();
}

function comparing(string){
    let stringInArray = string.split("");
    let lives = 10;
    let answer = "*".repeat(string.length).split("");
    let foundLetters = 0;



    while(lives > 0 || foundLetters != stringInArray.length){
        let letter = letterTaker();
        let found = false;
        for(i = 0; i < stringInArray.length; i++){
            if(stringInArray[i] == letter){
                foundLetters++;
                answer[i] = letter;
                found = true;
            }
        }
        if(found == false){
            lives--;
            console.log(`remaining ${lives}`);
        }

        if(lives < 1){
            console.log("you lost");
            console.log(`your result ${answer.join("")}`)
            return;
        }else if(foundLetters == stringInArray.length){
            console.log("you won");
            console.log(`your result ${answer.join("")}`)
            return;
        }
        console.log(`${answer.join("")}`);
    }
}



function main(){

    let userWord = wordTaker();

    console.log("*".repeat(userWord.length));

    comparing(userWord);
}

main();