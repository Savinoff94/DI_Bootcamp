// function infoAboutMe(){
//     console.log("Andrei Savinov 27");
// }

// infoAboutMe();


// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     console.log(`You are ${personName}, ${personAge} and yours favorite color is ${personFavoriteColor}`);
// }

// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

function infoAboutPerson(personName, personAge, personFavoriteColor, hobbies){
    console.log(`You are ${personName}, ${personAge} and yours favorite color is ${personFavoriteColor}`);
    
    
    for(hobbie of hobbies){
        console.log(`You like ${hobbie}`);
    }
}


infoAboutPerson("David", 45, "blue", ["tennis", "painting"]);
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"]);