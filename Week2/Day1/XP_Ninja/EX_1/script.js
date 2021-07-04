let sentence = prompt("Input sentence with or without Nemo").toLowerCase();

var n = sentence.search("nemo");

if(n >= 0){
    console.log(`I found Nemo at ${n}`);
}
else{
    console.log("I didnt find Nemo")
}