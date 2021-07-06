let age = [20,5,12,43,98,55];
let sum = 0;
let max = 0;

for(let i = 0; i < age.length; i++){
    sum += age[i];
    if(max < age[i]){
        max = age[i];
    }
}

console.log(sum);
console.log(max);