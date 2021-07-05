let zipCode = prompt("Zip code");

let zipCodeLength = zipCode.length;

let zipCodeInt = parseInt(zipCode);

if(zipCodeLength > zipCodeInt.toString().length){
    console.log("not good")
}else if(zipCodeLength == zipCodeInt.toString().length && zipCodeLength == 5 ){
    console.log("good");
}