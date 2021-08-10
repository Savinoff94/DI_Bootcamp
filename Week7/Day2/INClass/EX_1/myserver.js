const exp = require('express');
const app = exp();
app.use('/',exp.static(__dirname));
app.listen(3000);