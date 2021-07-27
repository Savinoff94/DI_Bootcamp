let flag = "cat";
function timer (flag){
    
    let myPromise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof(flag)==="string"){
                resolve(flag.toUpperCase());
            }else{
                reject(flag);
            }
        },5000)
    })

    return myPromise;
        
    
}

let myPromise = timer(flag);
myPromise.then(message =>{console.log(message.repeat(3))})
.catch(message => {console.log(message)})
.finally(()=>{console.log("congratulations")})