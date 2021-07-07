function rowLength(arr) {
    let longestWord = 0;
    for(arrItem of arr){
    if(arrItem.length > longestWord){
        longestWord = arrItem.length;
    }
    return longestWord;
    }
}


function drawer(number, arr){
    let space = " ";
    let star = "*";
    console.log(star.repeat(number + 2));
    for(word of arr){
    console.log("*" + word + space.repeat(number - word.length) + "*");
    }
    console.log(star.repeat(number + 2));
}


function starFrame(userPrompt){
    let wordList = userPrompt.split(", ");
    
    let longestWord = rowLength(wordList);

    drawer(longestWord, wordList);
}


let userPrompt = prompt("Input words separated by comma and space");

starFrame(userPrompt);




// let longestWord = 0;
// for(word of wordList){
//     if(word.length > longestWord){
//         longestWord = word.length;
//     }
// }
// console.log(star.repeat(longestWord + 2));
// for(word of wordList){
//     console.log("*" + word + space.repeat(longestWord - word.length) + "*");
// }
// console.log(star.repeat(longestWord + 2));