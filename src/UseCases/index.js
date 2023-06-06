
const Joi = require('joi');
const database = require('../data-acess/index');
const entites = require('../Entities/index');
const exceptions = require('../exceptions/index');

const services = require('../internal-service-calls/index');

const makeaddCompanyUsecase = require('./addCompany-usecase');
const addCompanyUsecase = makeaddCompanyUsecase({Joi,addCompany:database.addCompany,companyTable:entites.companyTable,ValidationError:exceptions.ValidationError});

const makegetCompanyUseCase = require('./getComapny-usecase');
const getCompanyUseCase = makegetCompanyUseCase({Joi,getCompany:database.getCompany,getEmployees:services.getEmployees,ValidationError:exceptions.ValidationError,NoDataFoundError:exceptions.NoDataFoundError});

const makedeleteCompanyUsecase = require('./deleteCompany-usecase');
const deleteCompanyUsecase = makedeleteCompanyUsecase({Joi,deleteCompany:database.deleteCompany,getCompany:getCompanyUseCase,deleteEmployees:services.deleteEmployees,ValidationError:exceptions.ValidationError,NoDataFoundError:exceptions.NoDataFoundError});

const makeupdateCompanyUseCase = require('./updateCompany-name-usecase');
const updateCompanyUseCase = makeupdateCompanyUseCase({Joi,updateCompanyName:database.updateCompanyName,ValidationError:exceptions.ValidationError,NoDataFoundError:exceptions.NoDataFoundError})

const makegetAllCompanyUseCase = require('./getAllCompany-usecase');
const getAllCompanyUseCase = makegetAllCompanyUseCase({getAllCompany:database.getAllCompany,getCompany:getCompanyUseCase,NoDataFoundError:exceptions.NoDataFoundError});

module.exports = {
    addCompanyUsecase,
    getCompanyUseCase,
    deleteCompanyUsecase,
    updateCompanyUseCase,
    getAllCompanyUseCase
}