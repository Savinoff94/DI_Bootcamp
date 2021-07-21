const letters = ['x', 'y', 'z', 'z'];
let flag = true;
let obj1 = {};

for(let i = 0; i < letters.length; ++i){
    if(flag){
        if(letters[i] == 'x' || letters[i] == 'y'){
            obj1[letters[i]] = 1;
        }else{
            obj1[letters[i]] = 2;
        }
    }
    if(letters[i] == 'z'){
        flag = false;
    }
}

console.log(obj1);

let obj2 = {};

letters.reduce((prev,next)=>{
    if(prev != next){
        obj2[prev] = 1;
    }else{
        obj2[prev] = 2;
    }
    return next;
})

console.log(obj2);