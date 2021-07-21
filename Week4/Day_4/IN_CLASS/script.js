// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

// let newObject1 = {...student};


// let newObject2 = {
//     ...student,
//     scores:{
//         ...student.scores
//     }
// };

// let newObject3 = {
//     ...student,
//     scores:{
//         ...student.scores
//     },
//     good : true,
// }

// console.log(newObject1);
// console.log(newObject2);
// console.log(newObject3);


class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");


killerRabbit.speak("hello");
blackRabbit.speak("hello you");