// function mergeWords(string) {
//     return function(nextString) {
//       if (nextString === undefined) {
//         return string;
//       } else {
//         return mergeWords(string + ' ' + nextString);
//       }
//     }
// }

// mergeWords('There')('is')('no')('spoon.')();


let mergeWords = (string) => (nextstring) =>{
    if(nextString === undefined){
        return string;
    }else{
        return mergeWords(string + ' ' + nextString);
    }
} 

mergeWords('There')('is')('no')('spoon.')();