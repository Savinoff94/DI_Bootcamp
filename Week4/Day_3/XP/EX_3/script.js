let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let answer = epic.reduce((prev, next) => {
    return prev + " " + next;
})

console.log(answer);