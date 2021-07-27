function compareToTen(num){
    let myPromise = new Promise(function(resolve, reject){
        if(num > 10){
            resolve ("number bigger than 10");
        }else{
            reject("number less than ten");
        }
    })
    return myPromise;
}


compareToTen(15)
.then(message=>{console.log(message)})
.catch(message=>{console.log(message)})
// let myComparison = compareToTen(15)
// myComparison.then(message=>{console.log(message)})
// .catch(message=>{console.log(message)})

// myComparison = compareToTen(8)
// myComparison.then(message=>{console.log(message)})
// .catch(message=>{console.log(message)})


compareToTen(8)
.then(message=>{console.log(message)})
.catch(message=>{console.log(message)})