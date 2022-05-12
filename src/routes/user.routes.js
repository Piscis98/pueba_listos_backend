
const express = require("express");

const router = express.Router();

const auth = require('../middlewares/auth.middleware');

const userController = require('../controllers/user.controllers');

const validateData = require('../middlewares/validateData.middleware');

const {createUserSchema,updateUserSchema}=require('../schemas/user.schemas');

router.post('/createUser', validateData(createUserSchema), userController.createUser);

module.exports=router;
