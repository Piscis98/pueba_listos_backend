const acronimeService = {};
const Acronime = require('../models/acronime.model');

const db = require('../database');



/******************CREAR LOS ACRÓNIMOS***********/
acronimeService.createAcronime= async (id_user, acronime, callback)=>{
  try {

    var query = `EXEC agregarAcronimo @acronimo='${acronime}', @usuario=${id_user};`;

    return db.executeQuery(query, callback);

  } catch (error) {

    console.log(error);

  }
}


/******************OBTENER LOS ACRÓNIMOS******************/
acronimeService.getAcronime= async (id_user, callback)=>{
  try {

    var query = `EXEC obtenerAcronimos @usuario=${id_user};`;

    return db.executeQuery(query, callback);

  } catch (error) {

    console.log(error);

  }
}


module.exports=acronimeService;
