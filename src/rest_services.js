const express = require('express');
const router = express.Router();
const controller = require('./Controller/index');

router.post('/addcompany',controller.addCompanyController);
router.get('/getcompany',controller.getCompanycontroller);
router.delete('/deletecompany',controller.deleteCompanyController);
router.patch('/updatecompanyname',controller.updateCompanyNameController);
router.get('/getallcompany',controller.getAllCompanyController);

module.exports = router;