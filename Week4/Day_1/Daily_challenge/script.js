const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
];

let arrNames = [];
let arrNames5 = [];
let total = 0;
gameInfo.forEach(function(item){
    let item1 = item["username"] + "!";
    arrNames.push(item1);
    (item["score"] > 5) ? arrNames5.push(item["username"]) : null;
    total += item["score"];
})
console.log(total);
console.log(arrNames5);
console.log(arrNames);