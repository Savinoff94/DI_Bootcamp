let people = ["Greg", "Mary", "Devon", "James"];

people.shift(); // removing the first element of the array

people[people.length-1] = "Jason";  // changingn "james" to "jason"

people.push("Andrei"); // add element to the last element of the array

for(person of people){
    console.log(person);
}



for(person of people){
    console.log(person);
    if(person == "Jason"){
        break;
    }
}

let copyPeople = people.slice(0,people.length-1);
console.log(`copyPeople ${copyPeople}`);

console.log(people.indexOf("Mary"));

console.log(people.indexOf("Foo")); // it returns -1 when cant find the element inside array

let last = people[people.length-1];