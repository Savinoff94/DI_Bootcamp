let bankAmount = 2000;
let details = ["+200", "-100", "+146", "+167", "-2900"];

details.forEach(function(item, index, arr){
    arr[index] = (item[0] == "+") ? item : multipleVAT(item);
})

function multipleVAT(money){
    let sub = money.substring(1);
    sub *= 1.17;
    sub = "-" + sub;
    return sub;
}

console.log(details);