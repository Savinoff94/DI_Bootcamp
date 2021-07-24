function isAnagram(text1, text2){
    text1 = deleteSpaces(text1).toLowerCase().split("");
    text2 = deleteSpaces(text2).toLowerCase().split("");
    
    text1.forEach(function(item,index,arr){
        if(text2.indexOf(item) > -1){
            text2.splice(text2.indexOf(item), 1);
        }
    })
    // console.log(text2.length);
    if(text2.length){
        console.log("This is not anagram");
    }else{
        console.log("This is anagram");
    }
}

function deleteSpaces(text){
    return text.split("").reduce(function(accumulator, item, index, arr){
        if(item != " "){
            return accumulator + item;
        }else{
            return accumulator;
        }
    },"")
}

isAnagram("The Morse Code", "Here come dots");