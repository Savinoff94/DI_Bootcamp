let zipCode = prompt("Zip code");

var pattern = /\d\d\d\d\d/;


var res = pattern.test(zipCode);

console.log(res);

if(res && zipCode.length == 5){
    console.log("good");
}else{
    console.log("bad");
}