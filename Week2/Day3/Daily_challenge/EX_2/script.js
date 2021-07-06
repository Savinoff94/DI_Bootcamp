let numbers = [5,0,9,1,7,4,2,6,3,8];
console.log(numbers);

function swap(arr, index1, index2){
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

let swapped = true;

while(swapped == true){
    swapped = false;
    for(let i = 0; i < numbers.length-1; i++){
        if(numbers[i] < numbers[i + 1]){
            swap(numbers, i, i + 1);
            swapped = true;
        }
    }
}

console.log(numbers);