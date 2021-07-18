function concatenate(str, num){
    let ans = ""
    for(let i = 0; i < num; i++){
        ans += `${str}`;
    }
    return ans;
}

let myString = concatenate("boom", 3);
console.log(myString);