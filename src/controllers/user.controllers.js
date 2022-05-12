const userService = require('../services/user.service');
const config = require('../config');

const bcrypt = require("bcryptjs");

const numberHash = parseInt(config.numberHash);

const userController={};



userController.createUser=async (req, res) => {

  var {username, password} = req.body;

  try {

    await bcrypt.hash(password, numberHash, async (err, passwordHash) => {
      if (err) {
        console.log("Error hasheando:", err);
      } else {

        var data = await userService.createUser(username, passwordHash);

        return res.status(200).json({ status: 200, data: data, message: "Succesfully Users Retrieved" });

      }
    });


  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}



module.exports=userController;
