let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach(function(item, index){
    if(index == 0){
        console.log(`${item} is ${index + 1 + ordinal[1]} choise`);
    }else if(index == 1){
        console.log(`${item} is ${index + 1 + ordinal[2]} choise`);
    }else if(index == 2){
        console.log(`${item} is ${index + 1 + ordinal[3]} choise`);
    }else {
        console.log(`${item} is ${index + 1 + ordinal[0]} choise`);
    }
})