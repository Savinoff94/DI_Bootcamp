function compareToTen(num){
    let myPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(num > 10){
                resolve ("success");
            }else{
                reject("oops something went wrong");
            }
        }, 3000)
    })
    return myPromise;
}
let tmp = compareToTen(11);
console.log(Promise.resolve(tmp))
console.log(Promise.reject(tmp))
let tmp2 = compareToTen(2);
console.log(Promise.resolve(tmp2))
console.log(Promise.reject(tmp2))
