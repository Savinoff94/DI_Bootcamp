const array = [[1],[2],[3],[[[4]]],[[[5]]]]
let [a,b,c,...d] = array;

let [ab] = a;
let [bc] = b;
let [cd] = c;
let [dd,dm] = d;
let [oo] = dd;
let [pp] =dm;

console.log([ab,bc,cd,oo,pp]);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

let newGreeting = greeting.map(function(item){
    
    return item.reduce((previous, second)=>previous + " " + second);
})

console.log(newGreeting);


const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

console.log(trapped.flat(25));