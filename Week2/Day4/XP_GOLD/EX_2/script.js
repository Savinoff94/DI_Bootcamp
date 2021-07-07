function abbrevName(string){
    let arr = string.split(" ");

    let answer = '';
    let i = 1;
    answer = arr[0] + " ";
    while(i < arr.length){
        answer += arr[i][0] + "." +" ";
        i++;
    }
    return answer;
    
}

console.log(abbrevName("Savinov Andrei Igorevich"));