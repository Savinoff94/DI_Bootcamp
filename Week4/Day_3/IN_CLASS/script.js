// function divide(myName){
//     myName = myName.split("");
//     return upper(myName);
// }

// function upper(arr){
//     for(item of arr){
//         item = item.toUpperCase();
//     }
//     return myJoin(arr);
// }

// function myJoin(arr){
//     return arr.join(".");
// }

// console.log(divide("John"));

// function divide(myName){
//     myName = myName.split("");
//     return myName;
// }

// function upper(arr){
//     for(item of arr){
//         item = item.toUpperCase();
//     }
//     return arr;
// }

// function myJoin(arr){
//     return arr.join(".");
// }

// console.log(myJoin(upper(divide("John"))));

const students = [
	{name: 'Rich', score: 33}, 
	{name: 'Peter', score: 55}
];

let mapped1 = students.map((item) => item["score"]);

let mapped2 = students.map((item) => {
    if(item["score"] > 50){
        item["average"] = true;
    }else{
        item["average"] = false;
    }
    return item;
});

console.log(mapped1);
console.log(mapped2);