// [2] === [2] 
// {} === {}
// they both false because we creating two new objects in both lines and not assingning them
// and when comparing values we comparing addreses which are different beacause its different objects


// const object1 = { number: 5 }; 
// const object2 = object1; //5
// const object3 = object2; //5
// const object4 = { number: 5}; //5
// object1.number = 4;//4 also in object 2 and 3 number is 4

class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal{
    constructor(name,type,color){
        super(name,type,color);
    }
    sound(noise){
        console.log(noise.repeat(3));
    }

}

let cow = new Mamal("Mashka", "cow", "whiteblack");
console.log(cow);
cow.sound("Moo");