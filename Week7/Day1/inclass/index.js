let myget = require('./myModule.js');
url = 'https://jsonplaceholder.typicode.com/users';
myget["myData"](url).then((data) => console.log(data));