function isEnough(wallet, price){
    let money = wallet[0] * 0.25 + wallet[1] * 0.1 + wallet[2] * 0.05 + wallet[3];
    if(money > price){
        return true;
    }else{
        return false;
    }
    
}

console.log(isEnough([2, 100, 0, 0], 14.11));
console.log(isEnough([0, 0, 20, 5], 0.75));