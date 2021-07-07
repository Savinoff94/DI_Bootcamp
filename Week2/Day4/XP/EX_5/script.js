function checkBaket(userPrompt){
    let amazonBasket = {
        glasses: 1,
        books: 2,
        floss: 100
    }
    
    if(userPrompt in amazonBasket){
        console.log("inside");
    }else{
        console.log("dont have any");
    }
}

checkBaket(prompt("input item").toLowerCase());
