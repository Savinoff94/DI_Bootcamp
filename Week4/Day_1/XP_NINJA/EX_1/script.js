let menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
]

let trueOrFalse = menu.some(function(){
    for(item of menu){
        if(item["type"] == "dessert"){
            return true;
        }
    }
})

let trueOrFalse2 = menu.every(function(){
    let index = (menu["type"] == "starter") ? true : false;
    return index;
})

let trueOrFalse3 = menu.some(function(item, index1, arr){
    let index = ("main course" in item) ? true : false;
    return index;
})

menu[0]["main course"] = "pelmeni";

console.log(trueOrFalse);
console.log(trueOrFalse2);
console.log(trueOrFalse3);
console.log(menu);