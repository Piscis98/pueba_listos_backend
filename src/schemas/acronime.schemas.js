const Joi = require('joi');

module.exports={

  createAcronimeSchema:Joi.object({
    acronime:Joi.string().required(),
    id_user:Joi.number().required()
  })

}
