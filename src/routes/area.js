var express = require("express");
var router = express.Router();

const areaController = require('../controllers/areaController');

router.get('/getAllById/:id', function(req, res){
    areaController.getAllByFkEmpresa(req, res);
})

router.get('/getMediaAreaById/:id', function(req, res){
    areaController.getMediaAreaById(req, res);
})

router.get('/getSensorsAndRead/:fkarea', function(req, res){
    areaController.getSensorsAndRead(req, res)
})

module.exports = router;