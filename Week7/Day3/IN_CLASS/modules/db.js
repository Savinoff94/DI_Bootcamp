const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : '5432',
      user : 'postgres',
      password : 'bioshock908',
      database : 'dvdrental'
    }
});


let all = () => {
    return knex.select('*').from('country');
}


module.exports = {
    data : all
}