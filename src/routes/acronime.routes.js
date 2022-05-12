const express = require("express");

const router = express.Router();

const acronimeController = require('../controllers/acronime.controllers');

const validateData = require('../middlewares/validateData.middleware');

const {createAcronimeSchema}=require('../schemas/acronime.schemas');

router.post('/createAcronime', validateData(createAcronimeSchema), acronimeController.createAcronime);

router.get('/getAcronime', acronimeController.getAcronime);

module.exports=router;
