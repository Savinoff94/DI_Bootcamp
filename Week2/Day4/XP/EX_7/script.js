let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill(list){
    let bill = 0;
    for(item of shoppingList){
        if(item in stock){
            if(stock[item] > 1){
                bill += prices[item];
                stock[item]--;
            }
        }
    }
    return bill;
}

console.log(myBill(["banana", "orange", "apple"]));
console.log(stock);

