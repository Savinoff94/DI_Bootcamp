console.log("1:" + Boolean(5 >= 1)); //true
console.log("2:" + Boolean(0 === 1)); // false because 0 and 1 have the same type but different value
console.log("3:" + Boolean(4 <= 1)); // false
console.log("4:" + Boolean(1 != 1));// false
console.log("5:" + Boolean('A' > 'B'));// false different chars binded with its own number according to Asci tables
console.log("6:" + Boolean('B' < 'C'));// true
console.log("7:" + Boolean("a" > "A"));// true
console.log("8:" + Boolean("b" < "A"));//flase
console.log("9:" + Boolean(true === false)); // false
console.log("10:" + Boolean(true != true)); // false