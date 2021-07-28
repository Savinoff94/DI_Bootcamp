const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});


async function myFunction(first,second,third){
  let myValues =await Promise.all([p1, p2, p3]);
  return myValues;
}

myFunction().then((result) => {console.log(result)})