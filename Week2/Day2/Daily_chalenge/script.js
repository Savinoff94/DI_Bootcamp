let sentence = "The movie is not that bad, I like it";
sentenceArray = sentence.split(" ");
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");


if(wordBad > wordNot && wordNot != -1){
    let to_remove = sentence.substring(wordNot, wordBad + 3);
    let answer = sentence.replace(to_remove, "good");
    console.log(answer);
    
}else{
    console.log(sentence);
}


    

