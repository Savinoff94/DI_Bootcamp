function isPalindrom(string){
    string = string.toLowerCase();
    if(string.length % 2 != 1){
        return false;
    }else{
        let center = Math.round(string.length / 2 - 1);
        let start = 0;
        let end = string.length-1;
        while(string[start] == string[end]){
            if(start == center){
                return true;
            }
            start++;
            end--;
        }
        return false;
    }
}

console.log(isPalindrom("Nagan"));

console.log(isPalindrom("rof"));

console.log(isPalindrom("robot"));

console.log(isPalindrom("robo"));

console.log(isPalindrom("oto"));