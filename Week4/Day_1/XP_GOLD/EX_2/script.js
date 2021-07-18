let arr1 = [1,1,2,3,2];
let arr = [1,1,2,1,1,1,4,5,7,1,8,4,3,5,7,3,8,5,8,4,7,8,4,3,6,9,2,7,6,5,4,8,7,2,3,7,8,9,6,5,4,9,3,2,8,1,3,7,2,3,6,4,5];

arr.forEach(function(item,index,myArr){
    for(let i = index+1; i < myArr.length; i++){
        if(item == myArr[i]){
            console.log(`start ${myArr}`);
            console.log(`${item} and index ${i}`);
            myArr.splice(i, 1);
            --i;
            console.log(`end ${myArr}`);
        }
    }
});

console.log(arr);