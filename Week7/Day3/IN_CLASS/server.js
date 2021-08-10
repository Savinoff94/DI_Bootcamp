const express = require('express');
let bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/', exp.static(__dirname + '/public'));



let data = require('./modules/db.js');
app.use('/', express.static(__dirname+'/public'));


 
app.get('/', function (req, res) {
    
    data.data()
    .then(dc=>{
      res.send(dc)
     })
    .catch((e)=>console.log(e));
})
 
app.listen(3000)