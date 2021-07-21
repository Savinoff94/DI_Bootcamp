const users = { user1: 18273, user2: 92833, user3: 90315 };

console.log(Object.entries(users));

let changedArr = Object.entries(users).map(function(item){
    
    return [item[0], item[1]*2];
})

console.log(changedArr);