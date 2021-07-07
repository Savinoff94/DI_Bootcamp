function tips(bill){
    if(bill < 50){
        return bill * 0.2;
    }else if(bill >= 50 && bill <= 200){
        return bill * 0.15;
    }else{
        return bill * 0.1;
    }

}
let payment = 100;
console.log(`Tip amount ${tips(payment)}`);
console.log(`Finale bill ${payment + tips(payment)}`);