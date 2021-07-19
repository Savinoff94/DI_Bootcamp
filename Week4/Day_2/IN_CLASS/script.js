// let username = "John";
// function checkName (user = username) {
// 	console.log("username = user", username === user) //true
// 	user += "Smith";
// 	console.log("username = user", username === user) //false
// 	console.log("username = ", user, username)// John Smith John
// }
// console.log("before username = ", username)//john
// checkName();
// console.log("after username = ", username)//john

function add() {
    let counter = 0;
    function plus() {
        counter += 1;
        console.log(counter) ;
    }
    plus();
    plus();
  }
  add()

function add() {
    let counter = 0;
    function plus() {
        counter += 1;
        console.log(counter) ;
    }
    plus();
}
add()
add()