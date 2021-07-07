function biggestNumberInArray(arr){
    let biggestNumber = 0;
    if(arr.length == 0){
        return 0;
    }
    for(item of arr){
        if(isNaN(item)){
            continue;
        }else{
            if(item > biggestNumber){
                biggestNumber = item;
            }
        }
    }
    return biggestNumber;
}



console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99]));

console.log(biggestNumberInArray(['a', 3, 4, 2]));