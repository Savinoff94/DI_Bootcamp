let colors = ["green", "blue", "purple" ,"orange", "black"];
let suffix = ["st", "nd", "rd", "th", "th"];


for(let i = 0; i < colors.length; i++){
    console.log(`My ${i + 1}${suffix[0]} choise is ${colors[i]}`);
}