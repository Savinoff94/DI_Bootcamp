let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if(users.length == 0){
    console.log("no one is online");
}else if(users.length == 1){
    console.log(`${users[0]} is online`);
}else if(users.length == 2){
    console.log(`${users[0]} and ${users[1]} is online`);
}else{
    console.log(`${users[0]} and ${users[1]} and ${users.length - 2} more is online`);
}