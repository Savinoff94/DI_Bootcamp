let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

console.log(colors.includes("Violet"));

colors.forEach(function(color, index){
    console.log(`#${index+1} choise is ${color}`);
})