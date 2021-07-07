function swapCase(string){
    let newLine = "";
    for(char of string){
        if(char == char.toUpperCase()){
            newLine += char.toLowerCase();
        }else{
            newLine += char.toUpperCase();
        }
    }
    return newLine;
}

console.log(swapCase("TO upper CASE"));