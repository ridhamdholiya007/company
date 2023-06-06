const Joi = require('joi');
const usecase = require('../UseCases/index');
const exceptions = require('../exceptions/index');

const makeaddCompanyController = require('./addCompany-controller');
const addCompanyController = makeaddCompanyController({Joi,addCompany:usecase.addCompanyUsecase,ValidationError:exceptions.ValidationError});

const makegetCompanycontroller = require('./getCompany-controller');
const getCompanycontroller = makegetCompanycontroller({Joi,getCompany:usecase.getCompanyUseCase,ValidationError:exceptions.ValidationError});

const makedeleteCompanyController = require('./deleteCompany-controller');
const deleteCompanyController = makedeleteCompanyController({Joi,deleteCompany:usecase.deleteCompanyUsecase,ValidationError:exceptions.ValidationError});

const makeupdateCompanyNameController = require('./updateCompany-name-usecase');
const updateCompanyNameController = makeupdateCompanyNameController({Joi,updateCompanyName:usecase.updateCompanyUseCase,ValidationError:exceptions.ValidationError});

const makegetAllCompanyController = require('./getAllCompany-controller');
const getAllCompanyController = makegetAllCompanyController({getAllCompany:usecase.getAllCompanyUseCase})

module.exports = {
    addCompanyController,
    getCompanycontroller,
    deleteCompanyController,
    updateCompanyNameController,
    getAllCompanyController
}
