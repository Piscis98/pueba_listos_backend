const userService = {};
const User = require('../models/user.model');




userService.createUser= async (username, password)=>{
  try {

    var obj = new User(username, password);

    var userCreate = JSON.parse(JSON.stringify(obj));
    return userCreate;

  } catch (error) {

    console.log(error);

  }
}




module.exports=userService;
