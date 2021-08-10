const axios = require('axios').default;
let obj;
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    obj = response;
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  
  module.exports = {
    myData : obj
}