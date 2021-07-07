function hotelCost(){
    let totalNights;
    do{
        totalNights = prompt("how many nights you want to spend here?"); 
    }while(isNaN(totalNights))
    return totalNights * 140;
}

function planeRideCost(){
    let prices = {
        london : 183,
        paris : 220
    };

    let destination = "";

    do{
        destination = prompt("input your destinstion");
    }while(!isNaN(destination))

    if(destination.toLowerCase() in prices){
        return prices[destination.toLowerCase()];
    }else{
        return 300;
    }
}

function rentalCarCost(){
    let totalDays;
    do{
        totalDays = prompt("how many days you want to spend here?"); 
    }while(isNaN(totalDays))
    if(totalDays > 10){
        return totalDays * 40 * 0.95;
    }else{
        return totalDays * 40;
    }
}

function totalVactionCost(){
    console.log(`Hotel: ${hotelCost()};\n Plane: ${planeRideCost()};\n Car: ${rentalCarCost()}`);
}



totalVactionCost();