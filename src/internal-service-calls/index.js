const fetch = require('node-fetch');
const config = require('../config/index');
const serviceEndpoint = config.serviceEndpoints


const makegetEmployees = require('./getEmployyes-by-companyid');
const getEmployees = makegetEmployees({fetch,config:serviceEndpoint});

const makedeleteEmployees = require('./deleteEmployees-by-comapny');
const deleteEmployees = makedeleteEmployees({fetch,config:serviceEndpoint});


module.exports = {
    getEmployees,
    deleteEmployees
}