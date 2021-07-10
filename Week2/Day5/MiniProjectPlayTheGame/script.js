function userPrompt(){
    let userNumber;
    do{
        userNumber = prompt("Input number between 0 and 10 included");
        if(isNaN(userNumber)){
            alert("you inputed just Nan");
        }else if(userNumber < 0 || userNumber > 10){
            alert("input a number between 0 and 10 included");
        }
    }while(userNumber < 0|| userNumber > 10 || isNaN(userNumber));
    return userNumber;
}



function test(userNumber, computerNumber){
    let lives = 3;
    let outputLives = 3;
    for(let i = 0; i < lives;i++){
        if(userNumber == computerNumber){
            alert("winner!");
            return;
        }else if(i+1 != lives){
            alert(`you have lost this round, ${outputLives = outputLives - 1} lives left`);
            userNumber = userPrompt();
        }else{
            alert("out of chanses");
            return;

        }
    } 
}


function playTheGame(){
    let invitation = confirm("Do you want to play the game?");
    if(!invitation){
        alert("No problem, Goodbye");
    }else{
        let userNumber = userPrompt();
        let computerNumber = Math.floor(Math.random() * 10) % 11;
        test(userNumber, computerNumber);
    }
    return;
}