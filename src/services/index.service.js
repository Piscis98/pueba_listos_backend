const service = {};
const app = require('../app')
const jwt = require('jsonwebtoken');


service.index= async (query, page, limit)=>{
  try {

    var obj = await [query, page, limit];

    return obj;

  } catch (error) {

    console.log(error);

  }
}


service.login= async (username, password)=>{
  try {

  // const payload = {id:3, name:'name'};
  // const token= jwt.sign({payload}, app.get('secret'), {expiresIn:'12h'});

  var obj = await {username, password};

    return obj;

  } catch (error) {

    console.log(error);

  }
}

module.exports=service;
