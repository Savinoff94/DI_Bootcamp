let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
let toDelete = [NaN, false, undefined, null];

arr.forEach(function(item,index,myArr){
    if(item === undefined){
        myArr.splice(index,1);
    }else if(item === null){
        myArr.splice(index,1);
    }else if(typeof(item) == "boolean"){
        myArr.splice(index,1);
    }else if(!item){
        myArr.splice(index,1);
    }

})
arr.forEach(function(item,index,myArr){
    if(item === undefined){
        myArr.splice(index,1);
    }
})
console.log(arr);