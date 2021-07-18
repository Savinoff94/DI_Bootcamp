let arr = [1,2,3,4,5,6,7,8];

function mySum(myArr){
    let sum = 0;
    for(num of myArr){
        if(!isNaN(num)){
            sum += num;
        }
    }
    return sum;
}

console.log(mySum(arr))