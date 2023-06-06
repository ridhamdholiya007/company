const {Pool} = require("pg");
const config = require('../config/index');
const backendConfig = config.backendConfig;
const companiesManupilations = require('./companies-detail-manupilation');


const cockroach = new Pool({
    user: backendConfig.development.username,
    host: backendConfig.development.host,
    database: backendConfig.development.database,
    password: backendConfig.development.password,
    port: backendConfig.development.port,
   
  });

const makeaddCompanies = companiesManupilations.makeaddCompanies;
const addCompany = makeaddCompanies({cockroach});

const makegetCompanies = companiesManupilations.makegetCompanies;
const getCompany = makegetCompanies({cockroach});

const makedeleteCompanies = companiesManupilations.makedeleteCompanies;
const deleteCompany = makedeleteCompanies({cockroach});

const makeupdateCompanies = companiesManupilations.makeupdateCompanies;
const updateCompanyName = makeupdateCompanies({cockroach});

const makegetAllCompany = companiesManupilations.makegetAllCompany;
const getAllCompany = makegetAllCompany({cockroach})

module.exports = {
    addCompany,
    getCompany,
    deleteCompany,
    updateCompanyName,
    getAllCompany
}