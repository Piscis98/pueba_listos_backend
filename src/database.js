
const config = require('./config');

const db = {};

/******************INICIALIZACIÓN DE LA BD**************/
const rest = new (require('rest-mssql-nodejs'))({
  user: config.user_db,
  password: config.password_db,
  server: config.host_db,
  database: config.db,
  port: parseInt(config.port_db),
  options: {
      enableArithAbort: true,
      encrypt: true,
  }
});


/*****************EJECUTADOR DE QUERYS*****************************/

db.executeQuery =  async (query,callback)=>{

  try {

    const result = await rest.executeQuery(query);

    return callback(false,result.data[0]);

  } catch (error) {

    return callback(true,[error]);

  }

}


module.exports=db;

