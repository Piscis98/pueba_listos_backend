const acronimeService = require('../services/acronime.service');

const acronimeController={};

/**********************CREAR ACRONIMO************/
acronimeController.createAcronime=async (req, res) => {

  var {id_user, acronime} = req.body;

  try {

    await acronimeService.createAcronime(id_user, acronime, async function (error, result) {


      if(error){
        console.log('ERROR');
      }else{

        return res.status(200).json({ status: 200, data: result, message: "Succesfully" });

      }


    });


  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}




/*********************OBTENER ACRÓNIMOS******************/
acronimeController.getAcronime=async (req, res) => {

  var {id_user} = req.query;

  try {

    await acronimeService.getAcronime(id_user, async function (error, result) {


      if(error){
        console.log('ERROR' + error);
      }else{

        return res.status(200).json({ status: 200, data: result, message: "Succesfully" });

      }


    });


  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}




module.exports=acronimeController;
