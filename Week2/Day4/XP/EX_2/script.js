function checkDriverAge(age){
    if(age == 18){
        console.log("Congratulations on your first year of driving. Enjoy the ride!")
    }
    else if(age < 18){
        console.log("Sorry, you are too young to drive this car. Powering off");
    }else{
        console.log("You are old enough to drive, Powering On. Enjoy the ride!");
    }
}



checkDriverAge(prompt("input your age"));