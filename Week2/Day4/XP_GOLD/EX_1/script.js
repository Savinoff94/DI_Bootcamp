function isBlank(string){
    for(char of string){
        if(char != " " || char != ' '){
            return false;
        }
    }
    return true;
}





console.log(isBlank(prompt("Input smth")));