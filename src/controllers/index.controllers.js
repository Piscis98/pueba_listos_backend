const service = require('../services/index.service');

const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const controller={};

controller.index=async (req, res, next) => {

  var page = req.params.page ? req.params.page : 1;
  var limit = req.params.limit ? req.params.limit : 10;

  try {
      var prueba = await service.index({prueba:'hilhbfz'}, page, limit)
      return res.status(200).json({ status: 200, data: prueba, message: "Succesfully Users Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}


controller.login=async (req, res) => {

  var palabraSecretaHasheada='$2a$05$aefaDCUHxlXgC5/tFC0nTOO2KqBJ3frPx.UPBWIWSU8MRb8RvUnjC';

  var {username, password} = req.body;

  try {


    bcrypt.compare(password, palabraSecretaHasheada, (err, equal) => {
      if (err) {
        console.log("Error comprobando:", err);
      } else {

        if(equal){

          const payload = {id:3, username};

          const token= jwt.sign({payload}, secret, {expiresIn:'12h'});

          var data = {username, password, ok:equal, token}

        return res.status(200).json({ status: 200, data: data, message: "Succesfully Users Retrieved" });

        }else{

          var dataE = {username, password, ok:equal}

        return res.status(200).json({ status: 200, data: dataE, message: "Error" });
        }
      }
    });



  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}

module.exports=controller;
