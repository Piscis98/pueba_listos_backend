const Joi = require('joi');

module.exports={

  createUserSchema:Joi.object({
    username:Joi.string().required(),
    password:Joi.string().required()
  }),

  updateUserSchema:Joi.object({
    name:Joi.string()
  })

}
