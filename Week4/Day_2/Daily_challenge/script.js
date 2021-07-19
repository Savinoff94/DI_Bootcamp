let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let newGroceries = {};

function copyO(obj1, obj2){
    for(key in obj1){
        obj2[key] = obj1[key];
    }
}

copyO(groceries, newGroceries);
console.log(newGroceries);

newGroceries["totalPrice"] = "25$";
newGroceries["other"]["payed"] = false;

console.log(groceries);
console.log(newGroceries);